import { ToolPage } from '../../pages/ToolPage'

export default function DiffViewerApp() {
  return (
    <ToolPage
      toolId="diff-viewer"
      title="Diff Viewer"
      description="Inspect file edits quickly with side-by-side or unified diff modes."
      backendStatus="Can run fully local. Optional backend later for sync/history."
    />
  )
}
