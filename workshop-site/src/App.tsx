import { Suspense } from 'react'
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
import { HueWheel } from './components/HueWheel'
import { OceanBackground } from './components/OceanBackground'
import { CloudHistoryPage } from './pages/CloudHistoryPage'
import { LibraryPage } from './pages/LibraryPage'
import { LoginPage } from './pages/LoginPage'
import { ThemeHueProvider } from './theme/ThemeHueContext'
import { workshopTools } from './registry/toolsRegistry'

function RouteFallback() {
  return (
    <div className="panel glass route-fallback">
      <p>Loading tool…</p>
    </div>
  )
}

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
    <>
      <OceanBackground />
      <div className="app-shell">
        <header className="app-header glass">
          <NavLink className="brand" to="/">
            Workshop
          </NavLink>
          <nav className="app-nav" aria-label="Workshop routes">
            <NavLink to="/">Library</NavLink>
            {workshopTools
              .filter((t) => t.showInNav)
              .map((t) => (
                <NavLink key={t.id} to={t.path}>
                  {t.title}
                </NavLink>
              ))}
            {isAuthenticated ? (
              <NavLink to="/history">Account history</NavLink>
            ) : null}
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
            <HueWheel />
          </div>
        </header>
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeHueProvider>
      <AuthProvider>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<LibraryPage />} />
            <Route path="/login" element={<LoginPage />} />
            {workshopTools.map((tool) => {
              const ToolComponent = tool.Component
              return (
                <Route
                  key={tool.id}
                  path={tool.path.replace(/^\//, '')}
                  element={
                    <Suspense fallback={<RouteFallback />}>
                      <ToolComponent />
                    </Suspense>
                  }
                />
              )
            })}
            <Route element={<ProtectedRoute />}>
              <Route path="/history" element={<CloudHistoryPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeHueProvider>
  )
}

export default App
