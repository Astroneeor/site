import { Link } from 'react-router-dom'

const tools = [
  {
    route: '/skill-tree',
    name: 'Skill Tree Builder',
    details: 'Map dependencies between skills and track progression.',
    access: 'Public. Local snapshots in this browser; account history after login.',
  },
  {
    route: '/diff-viewer',
    name: 'Diff Viewer',
    details: 'Inspect edited files quickly across unified and split views.',
    access: 'Public. Local snapshots in this browser; account history after login.',
  },
]

export function LibraryPage() {
  return (
    <section className="panel">
      <h1>Workshop Library</h1>
      <p>
        Tools are open to everyone. Each tool keeps lightweight history in this
        browser without an account. Sign in when you want account-backed history
        (cross-device later via Supabase).
      </p>
      <div className="tool-grid">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.route}>
            <h2>{tool.name}</h2>
            <p>{tool.details}</p>
            <small>{tool.access}</small>
            <Link className="button-link" to={tool.route}>
              Open tool
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
