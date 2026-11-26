# Changelog

All notable changes to Relwatch are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-rc.10] - 2026-11-26

### Added

- **Real-Time Locomotive Duty Reporting (Sensus Loko)**: report and confirm locomotives hauling trains (including double-traction / Traksi Ganda) directly from the train card and trip detail screen, backed by community consensus and automatic synchronization from approved Hunting Gallery photos.
- **581-Locomotive Master Catalog & Profile**: search locomotive numbers in the Search tab to inspect home depot, livery, old number, active duty today, and 14-day duty history across 11 series and 26 depots in Java and Sumatra.

### Changed

- Refactored Android app into a feature-based modular architecture (`core/`, `feature/`, `navigation/`) and backend into Modular Monolith + DDD (`domain/`, `application/`, `infrastructure/`, `web/`).

## [1.0.0-rc.9] - 2026-11-25

### Changed

- **Terminus Arrival Grace Window**: trains arriving at their final destination station now remain visible at the platform in muted gray (with a `"Tiba"` label on consist view) for 60 seconds before disappearing from the map.

## [1.0.0-rc.8] - 2026-11-25

### Added

- **Station Signal Lamp Simulation (PPKA View)**: automatic entry (`M1`/`M2`) and exit (`K1`/`K2`) signal lamps across all 628 stations when zoomed in (`zoom >= 13.5`), dynamically switching between **Semboyan 5 (Green)**, **Semboyan 6 (Yellow)**, and **Semboyan 7 (Red)** based on yard occupancy and approaching trains (educational simulation, not official PPKA/KAI signaling).

## [1.0.0-rc.7] - 2026-11-25

### Fixed

- Fixed infinite loading spinner when reopening Obrolan Railfans (Global Chat) with existing messages.
- Fixed user handle and staff role resolution in Global Chat messages.

## [1.0.0-rc.6] - 2026-11-25

### Added

- **Obrolan Railfans (Global Chat, Android-exclusive)**: real-time WebSocket railfan chat directly on the map with region filters (`Semua`, `Jawa`, `Sumut`, `Sumbar`, `Sumsel`), optional privacy-safe nearest-station tag, automated moderation & spam cooldown, and `FLAG_SECURE` screen protection while the chat sheet is open.

### Changed

- Updated locomotive input placeholder in Share Your Hunting to `"Seri Lokomotif"`.

## [1.0.0-rc.5] - 2026-11-23

### Added

- **Full Indonesia GAPEKA 2026 coverage**: added Sumatra Barat (KP-DJKA 118/2026) and Sumatra Selatan & Lampung (KP-DJKA 119/2026) alongside Java and Sumbagut/Aceh — now covering **2,506 trains** and **628 stations**.
- **Quick Region Switcher & Collapsible Filter** on the map HUD (`Jawa`, `Sumut`, `Sumbar`, `Sumsel`) for one-tap camera jumps and a cleaner, more spacious map canvas.

### Fixed

- Restored 100% double-track polylines across all major Java & Sumatra corridors and expanded station platform track discovery for large junctions (Cirebon, Bekasi, Surabaya Gubeng, Solo Balapan).

## [1.0.0-rc.4] - 2026-11-23

### Added

- **Direct Upload to Relwatch Hunting Gallery**: upload hunting photos straight from Share Your Hunting to `relwatch.app/hunting` with automatic EXIF extraction, train category selection, clean corner-watermark archive mode (or optional telemetry card overlay), and hardware-attested device verification.

## [1.0.0-rc.3] - 2026-11-23

### Changed

- Simplified Share Your Hunting photo labels to clean, general-purpose options (`Tanpa label` by default, `Hunting Pagi`, `Hunting Sore`, `Night Shot`, `Spot Favorit`, and `Jarak Aman`).

## [1.0.0-rc.2] - 2026-11-23

### Fixed

- Cleaned up user-facing account wording on the Share Your Hunting photographer watermark toggle.

## [1.0.0-rc.1] - 2026-11-23

### Added

- **Share Your Hunting (`#SafetyHunting`)**: create and share railfan hunting photo cards directly from the camera or gallery with train telemetry overlay, GPS auto-detection for nearby stations and trains, `#SafetyHunting` badge, railfan stickers, and Firebase photographer watermark (`Shot by ...`).
- Selectable photo aspect ratios (**Portrait 4:5**, **1:1**, **Landscape 16:9**, **Story 9:16**) with adaptive **Minimal** and **Frosted Card** overlay layouts.

### Changed

- Redesigned bottom navigation into a floating pill bar with a dedicated center camera action button for Share Your Hunting.

## [0.1.0-beta.13] - 2026-11-22

### Added

- Registration flow now includes full name and password confirmation fields.
- Deep link (`relwatch://auth`) and automatic email verification reload when returning from the confirmation link, plus a resend verification button in Tentang.

### Fixed

- Fixed a MapLibre `line-width` zoom expression error on consist window layers.

## [0.1.0-beta.12] - 2026-11-22

### Added

- Native feedback and bug report form in Tentang, with optional device info and diagnostic log attachment.

### Changed

- Verification and password reset emails are now sent from relwatch.app and link directly to the Relwatch confirmation page.

## [0.1.0-beta.11] - 2026-11-22

### Added

- Official Relwatch device verification for server access. Earlier versions can no longer load data; update to this version.

### Changed

- Trains are drawn more accurately along real OSM rails, including station platform tracks.
- Clearer, user-friendly error messages throughout the app.

## [0.1.0-beta.10] - 2026-11-22

### Changed

- Updated the connection to the Relwatch server. Earlier versions can no longer load data; update to this version.

## [0.1.0-beta.9] - 2026-11-21

### Added

- North Sumatra and Aceh (GAPEKA Sumbagut, KP-DJKA 117/2026): Sri Lelawangsa to Kualanamu Airport, Putri Deli, Sribilah Utama, Datuk Belambangan and the other trains, with their crossings. Positions appear from 1 December together with Java.
- Terms of service, linked from the sign-in consent and from Tentang.

### Changed

- The official site moved to relwatch.app.

### Fixed

- Trains whose rolling stock is not known yet no longer disappear when the map is zoomed in.

## [0.1.0-beta.8] - 2026-11-21

### Added

- Station sidings are drawn on the map, with smooth points. Trains waiting for a crossing or being overtaken move onto the siding; trains running through stay on the main line.
- Open a station on the map from search results and from its station board.
- The maps can be rotated with two fingers; a compass turns the map back to north.

### Changed

- Every train is drawn exactly on its track at all zoom levels, on double track and through curves, instead of drifting off the line or overlapping another train.

## [0.1.0-beta.7] - 2026-11-21

### Added

- Train meets (Papasan) from GAPEKA: which trains each train crosses, overtakes or is overtaken by, with station and time. Shown in Detail perjalanan, on the line graph and on the maps.
- On the single-train map the opposing train appears shortly before a meet, so both can be watched passing.
- Double track is drawn as two tracks, and trains run on their own track.
- Train names on the map when zoomed in.
- The line graph credits the ignitrondev-core engine.

### Changed

- Meets where both trains keep running are placed in the section where they pass, with the actual time, instead of at the station listed in GAPEKA.
- A train that has just left a station shows "Berangkat dari" instead of "Berhenti".

### Fixed

- Signing in with Google from Tentang also requires the privacy policy consent.

## [0.1.0-beta.6] - 2026-11-21

### Added

- Privacy policy, linked from the sign-in screen and from Tentang.
- Signing in or registering now requires ticking the privacy policy consent.

### Changed

- The single-train map uses less mobile data: the position is requested once per second instead of ten times.
- A clear message is shown when the server temporarily limits requests from your network.

## [0.1.0-beta.5] - 2026-11-21

### Added

- Optional account: sign in with Google or with email and password (with email verification and password reset). Tentang shows the account with Keluar and Hapus akun. Every feature still works without an account.
- Grafik lintas: a time-distance graph of every train on a train's line, with the current estimated positions. Open it from Detail perjalanan.
- Redesigned Detail perjalanan with the current position, consist and stations grouped into sections; pass-through stations can be expanded.
- Search shows each train's live status, the nearest station from your location and popular stations.
- Station boards split departures and arrivals, filter by class and show which trains are on their way.
- Favourite stations, marked with a star and listed in Cari.
- My-location button on the maps.
- What's new screen in Tentang.
- New onboarding photos by Rega Destama.

### Changed

- Train positions, timetables and boards now come from the Relwatch server; the app needs an internet connection to show them.
- Positions take gradients into account, so trains slow down on climbs such as Nagreg and still arrive on schedule.
- The train card on the map is a sheet that can be dragged, keeping the map visible.
- Smoother back animation when swiping from the screen edge.
- Tentang redesigned with an account card.

### Security

- The app refuses to run when it is not signed with the official key.

## [0.1.0-beta.4] - 2026-11-18

### Changed

- Demo mode opens every tab before GAPEKA 2026 takes effect: Beranda, Cari and station boards show the sample train KA 132 on the demo clock. Real mode still follows the date.

## [0.1.0-beta.3] - 2026-11-18

### Added

- Demo mode on the network map: one sample train, KA 132 Parahyangan (Gambir to Bandung), runs on its timetable so the map can be tried before GAPEKA 2026 takes effect.
- Train detail card: tap a train to see its relation, estimated speed and section speed limit, status, next stop and consist. Train photos are coming soon.
- Zoom buttons on the maps: tap for one level, hold to keep zooming.

### Fixed

- Maps keep to a zoom range where the basemap and trains stay visible.
- Consists no longer disappear at very close zoom.

## [0.1.0-beta.2] - 2026-11-18

### Added

- Check for update in Tentang. The app also checks on start, at most every 12 hours, and marks the Tentang tab when a new version is available.

### Changed

- Maps always follow the WIB wall clock.
- Train positions appear from 1 December 2026, when GAPEKA 2026 takes effect. Until then the app opens on the network map with only the Peta and Tentang tabs.

### Removed

- Playback speeds (1×, 60×, 600×), pause and Sekarang on the maps.
- Dataset and Engine cards in Tentang.

## [0.1.0-beta.1] - 2026-11-18

### Added

- Train positions on Java estimated from the GAPEKA 2026 timetable, with consists drawn car by car at close zoom.
- Station boards, trip details and search for trains and stations.
- Offline timetable; the basemap needs a connection.
- Onboarding with an optional sign-in screen. Accounts are not active yet; tap Lewati.

[unreleased]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.13...HEAD
[0.1.0-beta.13]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.12...v0.1.0-beta.13
[0.1.0-beta.12]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.11...v0.1.0-beta.12
[0.1.0-beta.11]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.10...v0.1.0-beta.11
[0.1.0-beta.10]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.9...v0.1.0-beta.10
[0.1.0-beta.9]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.8...v0.1.0-beta.9
[0.1.0-beta.8]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.7...v0.1.0-beta.8
[0.1.0-beta.7]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.6...v0.1.0-beta.7
[0.1.0-beta.6]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.5...v0.1.0-beta.6
[0.1.0-beta.5]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.4...v0.1.0-beta.5
[0.1.0-beta.4]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.3...v0.1.0-beta.4
[0.1.0-beta.3]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.2...v0.1.0-beta.3
[0.1.0-beta.2]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.1...v0.1.0-beta.2
[0.1.0-beta.1]: https://github.com/ignitrondev/relwatch-releases/releases/tag/v0.1.0-beta.1
