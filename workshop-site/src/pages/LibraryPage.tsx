import { Link } from 'react-router-dom'

const tools = [
  {
    route: '/skill-tree',
    name: 'Skill Tree Builder',
    details: 'Map dependencies between skills and track progression.',
    access: 'Requires login',
  },
  {
    route: '/diff-viewer',
    name: 'Diff Viewer',
    details: 'Inspect edited files quickly across unified and split views.',
    access: 'Requires login',
  },
]

export function LibraryPage() {
  return (
    <section className="panel">
      <h1>Workshop Library</h1>
      <p>
        This workshop hosts your internal tools at one domain, with shared auth and
        consistent navigation.
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
