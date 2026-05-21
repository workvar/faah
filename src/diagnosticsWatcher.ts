import * as vscode from 'vscode';
import { getConfig, severityThreshold } from './config';

type Trigger = () => void;

/**
 * Watches diagnostics and fires `trigger` whenever the total count of
 * diagnostics at-or-above the configured severity *increases*.
 */
export function registerDiagnosticsWatcher(trigger: Trigger): vscode.Disposable {
  let lastCount = countBadDiagnostics();

  const sub = vscode.languages.onDidChangeDiagnostics(() => {
    const cfg = getConfig();
    if (cfg.source === 'tasks') return;

    const next = countBadDiagnostics();
    if (next > lastCount) trigger();
    lastCount = next;
  });

  return sub;
}

function countBadDiagnostics(): number {
  const min = severityThreshold(getConfig().severity);
  let total = 0;
  for (const [, diags] of vscode.languages.getDiagnostics()) {
    for (const d of diags) {
      if (d.severity <= min) total++;
    }
  }
  return total;
}
