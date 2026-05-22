# Faah Errors v0.0.2

Plays **"Faah"** whenever build errors appear in your code.

This is a small branding release that gives the extension a proper icon.

## ✨ What's new

- **Extension icon**: a 2000×2000 `media/icon.png` now shows in the Marketplace and the Extensions view, so Faah is easy to spot.
- **Command icons**: `Faah: Play Test Sound` and `Faah: Toggle Enabled` now carry their own icons via the `icon` property.
- **Cleanup**: removed the `media/README.md` placeholder; the "drop your `faah.mp3` here" note now lives in the main README.

No behavior changes; all settings and commands work exactly as in v0.0.1.

## ⚙️ Settings

| Setting | Description | Default |
|---|---|---|
| `faah.enabled` | Turn the sound on or off | `true` |
| `faah.source` | `diagnostics`, `tasks`, or `both` | `both` |
| `faah.cooldownMs` | Minimum milliseconds between consecutive sounds | `1500` |
| `faah.severity` | Minimum severity that triggers a sound, `error` or `warning` | `error` |

## 🎛️ Commands

- **Faah: Play Test Sound**: play the sound on demand.
- **Faah: Toggle Enabled**: flip `faah.enabled` without opening Settings.

## 📦 Installation

Download `faah-errors-0.0.2.vsix` from the assets below and install it:

```bash
code --install-extension faah-errors-0.0.2.vsix
```

Or in VS Code: **Extensions → ··· → Install from VSIX…**

The extension activates automatically on startup (`onStartupFinished`).

## 📋 Requirements

- VS Code `1.80.0` or newer.

## 📝 Notes

- Drop your own sound file at `media/faah.mp3` to customize the alert (a placeholder is included).
- Annoying your coworkers? Set `faah.enabled` to `false`.

---

**Full changelog:** [CHANGELOG.md](./CHANGELOG.md) · Licensed under [MIT](./LICENSE).
