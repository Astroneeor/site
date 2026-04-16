import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { AuthContext } from './AuthState'
import { createAuthAdapter } from './createAuthAdapter'
import type { AuthUser } from './authTypes'
const authAdapter = createAuthAdapter()

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true
    authAdapter.getCurrentUser().then((currentUser) => {
      if (!active) {
        return
      }
      setUser(currentUser)
      setIsLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const currentUser = await authAdapter.signInWithEmail(email, password)
    setUser(currentUser)
  }, [])

  const logout = useCallback(async () => {
    await authAdapter.signOut()
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
    }),
    [user, isLoading, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
