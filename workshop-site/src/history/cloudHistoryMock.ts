import type { HistorySnapshot } from './types'

/** Stand-in for Supabase (or your homelab API): same shape, swap implementation later. */

const PREFIX = 'workshop.cloudHistory.v1'

function storageKey(userId: string) {
  return `${PREFIX}.${userId}`
}

const MAX_ENTRIES_PER_TOOL = 50

function parseAll(raw: string | null): HistorySnapshot[] {
  if (!raw) {
    return []
  }
  try {
    const data = JSON.parse(raw) as HistorySnapshot[]
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export function loadAllCloudHistory(userId: string): HistorySnapshot[] {
  return parseAll(window.localStorage.getItem(storageKey(userId))).sort(
    (a, b) => b.savedAt.localeCompare(a.savedAt),
  )
}

export function loadCloudHistoryForTool(
  userId: string,
  toolId: string,
): HistorySnapshot[] {
  return loadAllCloudHistory(userId).filter((e) => e.toolId === toolId)
}

export function appendCloudSnapshot(
  userId: string,
  toolId: string,
  label: string,
): HistorySnapshot {
  const entry: HistorySnapshot = {
    id: crypto.randomUUID(),
    toolId,
    savedAt: new Date().toISOString(),
    label,
  }
  const all = loadAllCloudHistory(userId)
  const forTool = all.filter((e) => e.toolId === toolId)
  const rest = all.filter((e) => e.toolId !== toolId)
  const merged = [entry, ...forTool].slice(0, MAX_ENTRIES_PER_TOOL)
  window.localStorage.setItem(
    storageKey(userId),
    JSON.stringify([...rest, ...merged]),
  )
  return entry
}
