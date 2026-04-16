import { ToolHistoryPanel } from '../../components/ToolHistoryPanel'

/**
 * Shell for AI Editor — replace with ported UI from ClaudeMini/AIEditor.
 */
export default function AIEditorApp() {
  return (
    <section className="panel glass">
      <h1>AI Editor</h1>
      <p>
        Placeholder shell for the AI Editor tool. Wire real editor UI here when ready.
      </p>
      <div className="status-box">
        <h2>Integration</h2>
        <p>
          Same pattern as Hobbitify: default export, optional nested routes later,{' '}
          <code>toolId</code> matches history storage.
        </p>
      </div>
      <ToolHistoryPanel toolId="ai-editor" />
    </section>
  )
}
