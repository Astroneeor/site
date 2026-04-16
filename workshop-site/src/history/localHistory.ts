import type { HistorySnapshot } from './types'

const PREFIX = 'workshop.localHistory.v1'

function keyForTool(toolId: string) {
  return `${PREFIX}.${toolId}`
}

const MAX_ENTRIES = 25

function parseList(raw: string | null): HistorySnapshot[] {
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

export function loadLocalHistory(toolId: string): HistorySnapshot[] {
  return parseList(window.localStorage.getItem(keyForTool(toolId)))
}

export function appendLocalSnapshot(
  toolId: string,
  label: string,
): HistorySnapshot {
  const entry: HistorySnapshot = {
    id: crypto.randomUUID(),
    toolId,
    savedAt: new Date().toISOString(),
    label,
  }
  const next = [entry, ...loadLocalHistory(toolId)].slice(0, MAX_ENTRIES)
  window.localStorage.setItem(keyForTool(toolId), JSON.stringify(next))
  return entry
}

export function clearLocalHistory(toolId: string) {
  window.localStorage.removeItem(keyForTool(toolId))
}
