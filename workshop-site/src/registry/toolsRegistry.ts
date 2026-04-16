import { lazy, type LazyExoticComponent, type ComponentType } from 'react'

export type WorkshopTool = {
  /** Stable id for localStorage / future Supabase (e.g. skill-tree, hobbitify) */
  id: string
  /** URL path under workshop host (must start with /) */
  path: string
  title: string
  description: string
  accessBlurb: string
  showInNav: boolean
  Component: LazyExoticComponent<ComponentType>
}

export const workshopTools: WorkshopTool[] = [
  {
    id: 'skill-tree',
    path: '/skill-tree',
    title: 'Skill Tree Builder',
    description: 'Map dependencies between skills and track progression.',
    accessBlurb:
      'Public. Local snapshots in this browser; account history after login.',
    showInNav: false,
    Component: lazy(() => import('../tools/skill-tree/SkillTreeApp')),
  },
  {
    id: 'diff-viewer',
    path: '/diff-viewer',
    title: 'Diff Viewer',
    description: 'Inspect edited files quickly across unified and split views.',
    accessBlurb:
      'Public. Local snapshots in this browser; account history after login.',
    showInNav: false,
    Component: lazy(() => import('../tools/diff-viewer/DiffViewerApp')),
  },
  {
    id: 'hobbitify',
    path: '/hobbitify',
    title: 'Hobbitify',
    description: 'Your Hobbitify experience — UI to be ported into this shell.',
    accessBlurb:
      'Public. Local snapshots in this browser; account history after login.',
    showInNav: false,
    Component: lazy(() => import('../tools/hobbitify/HobbitifyApp')),
  },
  {
    id: 'ai-editor',
    path: '/ai-editor',
    title: 'AI Editor',
    description: 'AI-assisted editing — shell ready for your editor project.',
    accessBlurb:
      'Public. Local snapshots in this browser; account history after login.',
    showInNav: false,
    Component: lazy(() => import('../tools/ai-editor/AIEditorApp')),
  },
]

const byId = new Map(workshopTools.map((t) => [t.id, t]))

export function getWorkshopToolById(id: string): WorkshopTool | undefined {
  return byId.get(id)
}

export function getToolTitle(id: string): string {
  return getWorkshopToolById(id)?.title ?? id
}

export function getToolPath(id: string): string {
  return getWorkshopToolById(id)?.path ?? `/${id}`
}
