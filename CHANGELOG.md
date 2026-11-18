# Changelog

All notable changes to Relwatch are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.2...HEAD
[0.1.0-beta.2]: https://github.com/ignitrondev/relwatch-releases/compare/v0.1.0-beta.1...v0.1.0-beta.2
[0.1.0-beta.1]: https://github.com/ignitrondev/relwatch-releases/releases/tag/v0.1.0-beta.1
