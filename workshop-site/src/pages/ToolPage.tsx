type ToolPageProps = {
  title: string
  description: string
  backendStatus: string
}

export function ToolPage({ title, description, backendStatus }: ToolPageProps) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="status-box">
        <h2>Backend readiness</h2>
        <p>{backendStatus}</p>
      </div>
    </section>
  )
}
