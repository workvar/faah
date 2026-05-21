# Faah

Plays **"Faah"** whenever there are build errors in your code.

## Setup

1. `npm install`
2. Drop your sound file at `media/faah.mp3` (a placeholder is included).
3. Press `F5` in VSCode to launch the Extension Development Host.

## Settings

- `faah.enabled` — turn it off when your coworkers complain.
- `faah.source` — `diagnostics`, `tasks`, or `both`.
- `faah.cooldownMs` — debounce between sounds.
- `faah.severity` — `error` or `warning`.

## Commands

- `Faah: Play Test Sound`
- `Faah: Toggle Enabled`
