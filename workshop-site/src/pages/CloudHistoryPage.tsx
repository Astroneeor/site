import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { loadAllCloudHistory } from '../history/cloudHistoryMock'

const TOOL_LABELS: Record<string, string> = {
  'skill-tree': 'Skill Tree Builder',
  'diff-viewer': 'Diff Viewer',
}

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

export function CloudHistoryPage() {
  const { user } = useAuth()
  const [bump, setBump] = useState(0)

  const rows = useMemo(() => {
    void bump
    if (!user) {
      return []
    }
    return loadAllCloudHistory(user.id)
  }, [user, bump])

  if (!user) {
    return <p className="history-empty">Loading account…</p>
  }

  return (
    <section className="panel">
      <h1>Account history</h1>
      <p>
        Snapshots you saved while signed in across workshop tools. This page is
        protected: only authenticated sessions see it.
      </p>
      <p className="history-hint">
        Storage is still local mock data keyed by your user id until Supabase is
        wired up.
      </p>
      <button
        type="button"
        className="button-ghost"
        onClick={() => setBump((n) => n + 1)}
      >
        Refresh list
      </button>
      {rows.length === 0 ? (
        <p className="history-empty">No account snapshots yet. Open a tool and use
        &quot;Save to account history&quot;.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Label</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <Link to={`/${row.toolId}`}>
                    {TOOL_LABELS[row.toolId] ?? row.toolId}
                  </Link>
                </td>
                <td>{row.label}</td>
                <td>{formatWhen(row.savedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
