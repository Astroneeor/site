import { useCallback, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import {
  appendCloudSnapshot,
  loadCloudHistoryForTool,
} from '../history/cloudHistoryMock'
import { appendLocalSnapshot, loadLocalHistory } from '../history/localHistory'
import type { HistorySnapshot } from '../history/types'

type ToolHistoryPanelProps = {
  toolId: string
}

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

function SnapshotList({ items }: { items: HistorySnapshot[] }) {
  if (items.length === 0) {
    return <p className="history-empty">No entries yet.</p>
  }
  return (
    <ul className="history-list">
      {items.map((row) => (
        <li key={row.id}>
          <span className="history-label">{row.label}</span>
          <span className="history-meta">{formatWhen(row.savedAt)}</span>
        </li>
      ))}
    </ul>
  )
}

export function ToolHistoryPanel({ toolId }: ToolHistoryPanelProps) {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()
  const [localBump, setLocalBump] = useState(0)
  const [cloudBump, setCloudBump] = useState(0)

  const localItems = useMemo(() => {
    void localBump
    return loadLocalHistory(toolId)
  }, [toolId, localBump])

  const cloudItems = useMemo(() => {
    void cloudBump
    if (!user) {
      return []
    }
    return loadCloudHistoryForTool(user.id, toolId)
  }, [toolId, user, cloudBump])

  const saveLocal = useCallback(() => {
    appendLocalSnapshot(toolId, `Local snapshot ${new Date().toLocaleTimeString()}`)
    setLocalBump((n) => n + 1)
  }, [toolId])

  const saveCloud = useCallback(() => {
    if (!user) {
      return
    }
    appendCloudSnapshot(
      user.id,
      toolId,
      `Account snapshot ${new Date().toLocaleTimeString()}`,
    )
    setCloudBump((n) => n + 1)
  }, [toolId, user])

  const loginHref = `/login?next=${encodeURIComponent(location.pathname + location.search)}`

  return (
    <div className="history-panels">
      <div className="history-panel history-panel--local glass">
        <h2>This browser</h2>
        <p className="history-hint">
          Saved only on this device. No account required. Cleared if you clear site
          data.
        </p>
        <button type="button" onClick={saveLocal}>
          Save local snapshot (demo)
        </button>
        <SnapshotList items={localItems} />
      </div>

      <div className="history-panel history-panel--cloud glass">
        <h2>Account history</h2>
        {isAuthenticated && user ? (
          <>
            <p className="history-hint">
              Synced entries for your signed-in account. Today this uses browser
              storage as a stand-in; Supabase (or your API) will replace this
              layer later.
            </p>
            <button type="button" onClick={saveCloud}>
              Save to account history (demo)
            </button>
            <p className="history-crosslink">
              <Link to="/history">View all tools on account history page</Link>
            </p>
            <SnapshotList items={cloudItems} />
          </>
        ) : (
          <>
            <p className="history-hint">
              Cross-device history and backups live on your account. Sign in to save
              and view synced snapshots.
            </p>
            <Link className="button-link" to={loginHref}>
              Log in for account history
            </Link>
            <SnapshotList items={[]} />
          </>
        )}
      </div>
    </div>
  )
}
