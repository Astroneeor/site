export type AuthUser = {
  id: string
  email: string
}

export type AuthAdapter = {
  signInWithEmail: (email: string, password: string) => Promise<AuthUser>
  signOut: () => Promise<void>
  getCurrentUser: () => Promise<AuthUser | null>
}
