import { useState, type FormEvent } from 'react'
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

function safeInternalPath(candidate: string | null): string | null {
  if (!candidate || !candidate.startsWith('/') || candidate.startsWith('//')) {
    return null
  }
  if (candidate.includes(':')) {
    return null
  }
  return candidate
}

export function LoginPage() {
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const fromPath = (location.state as { from?: { pathname?: string } } | null)?.from
    ?.pathname
  const nextParam = safeInternalPath(searchParams.get('next'))

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!email.trim()) {
      setError('Email is required.')
      return
    }

    try {
      await login(email.trim(), password)
      navigate(fromPath ?? nextParam ?? '/', { replace: true })
    } catch {
      setError('Unable to sign in right now.')
    }
  }

  return (
    <section className="panel">
      <h1>Workshop Login</h1>
      <p>Mock auth is active now. Supabase auth will plug into the same flow later.</p>
      <form className="auth-form" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Any password for mock mode"
        />

        {error ? <p className="error-text">{error}</p> : null}

        <button type="submit">Sign in</button>
      </form>
    </section>
  )
}
