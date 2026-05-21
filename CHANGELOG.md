# Changelog

All notable changes to the **Faah** extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2026-05-21

Initial release. 🎉

### Added

- **Build-error sound** — plays the "Faah" sound (`media/faah.mp3`) whenever
  build errors appear in your code.
- **Two trigger sources** via the `faah.source` setting:
  - `diagnostics` — editor/language-server diagnostics.
  - `tasks` — build task failures.
  - `both` — listen to everything (default).
- **Settings:**
  - `faah.enabled` — toggle the sound on or off (default: `true`).
  - `faah.source` — `diagnostics`, `tasks`, or `both` (default: `both`).
  - `faah.cooldownMs` — minimum milliseconds between consecutive sounds
    (default: `1500`).
  - `faah.severity` — minimum diagnostic severity that triggers a sound,
    `error` or `warning` (default: `error`).
- **Commands:**
  - `Faah: Play Test Sound` — play the sound on demand.
  - `Faah: Toggle Enabled` — flip `faah.enabled` without opening Settings.
- Activates automatically on startup (`onStartupFinished`).

[0.0.1]: https://github.com/workvar/faah/releases/tag/v0.0.1
