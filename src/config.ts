import * as vscode from 'vscode';

export type Source = 'diagnostics' | 'tasks' | 'both';
export type Severity = 'error' | 'warning';

export interface FaahConfig {
  enabled: boolean;
  source: Source;
  cooldownMs: number;
  severity: Severity;
}

export function getConfig(): FaahConfig {
  const c = vscode.workspace.getConfiguration('faah');
  return {
    enabled: c.get<boolean>('enabled', true),
    source: c.get<Source>('source', 'both'),
    cooldownMs: c.get<number>('cooldownMs', 1500),
    severity: c.get<Severity>('severity', 'error'),
  };
}

export function severityThreshold(s: Severity): vscode.DiagnosticSeverity {
  return s === 'warning'
    ? vscode.DiagnosticSeverity.Warning
    : vscode.DiagnosticSeverity.Error;
}
