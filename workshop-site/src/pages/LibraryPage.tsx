import { Link } from 'react-router-dom'
import { workshopTools } from '../registry/toolsRegistry'

export function LibraryPage() {
  return (
    <section className="panel glass">
      <h1>Workshop Library</h1>
      <p>
        Tools are open to everyone. Each tool keeps lightweight history in this
        browser without an account. Sign in when you want account-backed history
        (cross-device later via Supabase).
      </p>
      <div className="tool-grid">
        {workshopTools.map((tool) => (
          <article className="tool-card glass" key={tool.id}>
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
            <small>{tool.accessBlurb}</small>
            <Link className="button-link" to={tool.path}>
              Open tool
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
