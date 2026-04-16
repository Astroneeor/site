import { mockAuthAdapter } from './mockAuthAdapter'
import type { AuthAdapter } from './authTypes'

function hasSupabaseEnv() {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL &&
      import.meta.env.VITE_SUPABASE_ANON_KEY,
  )
}

export function createAuthAdapter(): AuthAdapter {
  if (hasSupabaseEnv()) {
    // Placeholder: wire Supabase adapter once homelab endpoint is available.
    return mockAuthAdapter
  }

  return mockAuthAdapter
}
