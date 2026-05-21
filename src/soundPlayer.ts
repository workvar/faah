import { spawn } from 'child_process';
import * as path from 'path';
import * as vscode from 'vscode';
import { getConfig } from './config';

let lastPlayed = 0;

export function getSoundPath(context: vscode.ExtensionContext): string {
  return path.join(context.extensionPath, 'media', 'faah.mp3');
}

export function playFaah(context: vscode.ExtensionContext, force = false): void {
  const cfg = getConfig();
  if (!force && !cfg.enabled) return;

  const now = Date.now();
  if (!force && now - lastPlayed < cfg.cooldownMs) return;
  lastPlayed = now;

  const file = getSoundPath(context);
  const { cmd, args } = playerCommand(file);
  try {
    const child = spawn(cmd, args, { stdio: 'ignore', detached: true });
    child.on('error', () => {/* swallow — no audio backend available */});
    child.unref();
  } catch {
    // ignore
  }
}

function playerCommand(file: string): { cmd: string; args: string[] } {
  switch (process.platform) {
    case 'darwin':
      return { cmd: 'afplay', args: [file] };
    case 'win32':
      return {
        cmd: 'powershell',
        args: [
          '-NoProfile',
          '-Command',
          `(New-Object Media.SoundPlayer '${file}').PlaySync();`,
        ],
      };
    default:
      // Try paplay first; fall back to aplay via shell -c.
      return {
        cmd: 'sh',
        args: ['-c', `paplay "${file}" || aplay "${file}"`],
      };
  }
}
