import type { AuthAdapter, AuthUser } from './authTypes'

const STORAGE_KEY = 'workshop.mockUser'

function readUserFromStorage(): AuthUser | null {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    return null
  }

  try {
    return JSON.parse(stored) as AuthUser
  } catch {
    window.localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export const mockAuthAdapter: AuthAdapter = {
  async signInWithEmail(email: string) {
    const user: AuthUser = {
      id: crypto.randomUUID(),
      email,
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    return user
  },

  async signOut() {
    window.localStorage.removeItem(STORAGE_KEY)
  },

  async getCurrentUser() {
    return readUserFromStorage()
  },
}
