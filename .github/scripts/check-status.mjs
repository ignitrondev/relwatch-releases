import fs from "node:fs";

const HISTORY_FILE = process.env.HISTORY_FILE || "/tmp/status-data/history.json";
const DISCORD_WEBHOOK = process.env.STATUS_DISCORD_WEBHOOK || "";
const TIMEOUT_MS = 6000;
const MAX_DAYS = 90;
const MAX_INCIDENTS = 20;

const TARGETS = [
  {
    id: "core-api",
    name: "API & Engine Inti",
    url: "https://api.relwatch.app/healthz",
    method: "GET",
    isHealthy: (s) => s >= 200 && s < 300,
    degradedMs: 1500,
  },
  {
    id: "community-api",
    name: "Galeri & Komunitas",
    url: "https://api.relwatch.app/v1/hunting/photos?limit=1",
    method: "GET",
    isHealthy: (s) => s >= 200 && s < 300,
    degradedMs: 2000,
  },
  {
    id: "live-map",
    name: "Peta Live Web",
    url: "https://relwatch.app/peta",
    method: "HEAD",
    isHealthy: (s) => s >= 200 && s < 400,
    degradedMs: 2000,
  },
  {
    id: "gapeka-dir",
    name: "Direktori Jadwal GAPEKA",
    url: "https://relwatch.app/jadwal",
    method: "HEAD",
    isHealthy: (s) => s >= 200 && s < 400,
    degradedMs: 2000,
  },
  {
    id: "media-cdn",
    name: "CDN Media & Foto",
    url: "https://media.relwatch.app/",
    method: "HEAD",
    isHealthy: (s) => s >= 200 && s < 500,
    degradedMs: 1800,
  },
  {
    id: "apk-releases",
    name: "Distribusi Rilis APK",
    url: "https://github.com/ignitrondev/relwatch-releases/releases/latest",
    method: "HEAD",
    isHealthy: (s) => s >= 200 && s < 400,
    degradedMs: 2500,
  },
];

function wibDateKey(now) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

async function probe(target) {
  const started = Date.now();
  try {
    const res = await fetch(target.url, {
      method: target.method,
      redirect: "manual",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { "User-Agent": "Relwatch-Status-Monitor/1.0" },
    });
    const latencyMs = Math.max(1, Date.now() - started);
    if (!target.isHealthy(res.status)) {
      return { id: target.id, name: target.name, status: "down", latencyMs, detail: `HTTP ${res.status}` };
    }
    const status = latencyMs > target.degradedMs ? "degraded" : "operational";
    return { id: target.id, name: target.name, status, latencyMs, detail: status === "degraded" ? "Melambat" : "Normal" };
  } catch (err) {
    const latencyMs = Math.max(1, Date.now() - started);
    const isTimeout = err instanceof Error && (err.name === "TimeoutError" || err.name === "AbortError");
    return { id: target.id, name: target.name, status: "down", latencyMs, detail: isTimeout ? "Timeout" : "Unreachable" };
  }
}

function loadHistory() {
  try {
    const raw = fs.readFileSync(HISTORY_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && parsed.services) return parsed;
  } catch {
    // First run
  }
  return { updatedAt: null, lastStates: {}, services: {}, incidents: [] };
}

async function notifyDiscord(message) {
  if (!DISCORD_WEBHOOK) return;
  try {
    await fetch(DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: message }),
      signal: AbortSignal.timeout(5000),
    });
  } catch (err) {
    console.error("Discord webhook failed:", err);
  }
}

const now = new Date();
const nowIso = now.toISOString();
const today = wibDateKey(now);
const history = loadHistory();
const results = await Promise.all(TARGETS.map(probe));

for (const res of results) {
  const prev = history.lastStates[res.id] || "operational";
  history.lastStates[res.id] = res.status;

  const list = Array.isArray(history.services[res.id]) ? history.services[res.id] : [];
  let bucket = list.find((d) => d.date === today);
  if (!bucket) {
    bucket = { date: today, checks: 0, up: 0, degraded: 0, down: 0, totalMs: 0, avgMs: 0 };
    list.push(bucket);
  }
  bucket.checks += 1;
  if (res.status === "operational") bucket.up += 1;
  else if (res.status === "degraded") bucket.degraded += 1;
  else bucket.down += 1;
  bucket.totalMs = (bucket.totalMs || 0) + res.latencyMs;
  bucket.avgMs = Math.round(bucket.totalMs / bucket.checks);

  history.services[res.id] = list.slice(-MAX_DAYS);

  if (prev !== "down" && res.status === "down") {
    history.incidents.unshift({
      id: `${res.id}-${Date.now()}`,
      serviceId: res.id,
      serviceName: res.name,
      status: "investigating",
      startedAt: nowIso,
      resolvedAt: null,
      detail: res.detail,
    });
    await notifyDiscord(`🚨 **[Relwatch Status]** \`${res.name}\` mengalami gangguan (${res.detail}) — https://status.relwatch.app`);
  } else if (prev === "down" && res.status !== "down") {
    const openIncident = history.incidents.find((inc) => inc.serviceId === res.id && !inc.resolvedAt);
    if (openIncident) {
      openIncident.status = "resolved";
      openIncident.resolvedAt = nowIso;
    }
    await notifyDiscord(`✅ **[Relwatch Status]** \`${res.name}\` telah pulih (${res.latencyMs} ms) — https://status.relwatch.app`);
  }
}

history.incidents = history.incidents.slice(0, MAX_INCIDENTS);
history.updatedAt = nowIso;

fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
console.log(`Status snapshot updated (${today}):`, results.map((r) => `${r.id}=${r.status}(${r.latencyMs}ms)`).join(", "));
