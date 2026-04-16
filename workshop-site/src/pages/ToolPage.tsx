import { ToolHistoryPanel } from '../components/ToolHistoryPanel'

type ToolPageProps = {
  toolId: string
  title: string
  description: string
  backendStatus: string
}

export function ToolPage({
  toolId,
  title,
  description,
  backendStatus,
}: ToolPageProps) {
  return (
    <section className="panel glass">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="status-box">
        <h2>Backend readiness</h2>
        <p>{backendStatus}</p>
      </div>
      <ToolHistoryPanel toolId={toolId} />
    </section>
  )
}
