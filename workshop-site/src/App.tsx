import {
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { useAuth } from './auth/useAuth'
import { LibraryPage } from './pages/LibraryPage'
import { LoginPage } from './pages/LoginPage'
import { ToolPage } from './pages/ToolPage'

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <p>Checking session...</p>
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )
}

function AppShell() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/">
          Workshop
        </NavLink>
        <nav className="app-nav" aria-label="Workshop routes">
          <NavLink to="/">Library</NavLink>
          <NavLink to="/skill-tree">Skill Tree</NavLink>
          <NavLink to="/diff-viewer">Diff Viewer</NavLink>
        </nav>
        <div className="auth-status">
          {isAuthenticated ? (
            <>
              <span>{user?.email}</span>
              <button onClick={logout} type="button">
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<LibraryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/skill-tree"
              element={
                <ToolPage
                  title="Skill Tree Builder"
                  description="Model your growth path as a visual skill tree with dependencies."
                  backendStatus="No backend required for core editing. Save/share can be added later."
                />
              }
            />
            <Route
              path="/diff-viewer"
              element={
                <ToolPage
                  title="Diff Viewer"
                  description="Inspect file edits quickly with side-by-side or unified diff modes."
                  backendStatus="Can run fully local. Optional backend later for sync/history."
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
