import * as vscode from 'vscode';
import { playFaah } from './soundPlayer';
import { registerDiagnosticsWatcher } from './diagnosticsWatcher';
import { registerTaskWatcher } from './taskWatcher';

export function activate(context: vscode.ExtensionContext): void {
  const trigger = () => playFaah(context);

  context.subscriptions.push(
    registerDiagnosticsWatcher(trigger),
    registerTaskWatcher(trigger),

    vscode.commands.registerCommand('faah.test', () => playFaah(context, true)),

    vscode.commands.registerCommand('faah.toggle', async () => {
      const cfg = vscode.workspace.getConfiguration('faah');
      const next = !cfg.get<boolean>('enabled', true);
      await cfg.update('enabled', next, vscode.ConfigurationTarget.Global);
      vscode.window.showInformationMessage(`Faah ${next ? 'enabled' : 'disabled'}.`);
    }),
  );
}

export function deactivate(): void {
  // nothing to clean up
}
