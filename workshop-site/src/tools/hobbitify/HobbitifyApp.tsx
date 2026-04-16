import { ToolHistoryPanel } from '../../components/ToolHistoryPanel'

/**
 * Shell for Hobbitify — replace body with ported UI from the Hobbitify repo.
 * Keep toolId aligned with history keys if you change it.
 */
export default function HobbitifyApp() {
  return (
    <section className="panel glass">
      <h1>Hobbitify</h1>
      <p>
        Placeholder shell. Port the root layout and routes from your Hobbitify
        project into this folder (or lazy-load a package). History below uses{' '}
        <code>hobbitify</code> as the tool id.
      </p>
      <div className="status-box">
        <h2>Integration</h2>
        <p>
          See <code>ADDING_TOOLS.md</code> for the checklist. Prefer one default export
          component as the tool entry.
        </p>
      </div>
      <ToolHistoryPanel toolId="hobbitify" />
    </section>
  )
}
