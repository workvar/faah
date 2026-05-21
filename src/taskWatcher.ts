import * as vscode from 'vscode';
import { getConfig } from './config';

type Trigger = () => void;

/** Fires `trigger` when a build/test task ends with a non-zero exit code. */
export function registerTaskWatcher(trigger: Trigger): vscode.Disposable {
  return vscode.tasks.onDidEndTaskProcess((e) => {
    const cfg = getConfig();
    if (cfg.source === 'diagnostics') return;
    if (typeof e.exitCode === 'number' && e.exitCode !== 0) {
      trigger();
    }
  });
}
