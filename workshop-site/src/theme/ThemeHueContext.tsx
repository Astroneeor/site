import {
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { ThemeHueContext } from './themeHueState'

const STORAGE_KEY = 'workshop.themeHue'
const DEFAULT_HUE = 155

function loadHue(): number {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw !== null) {
      const n = Number(raw)
      if (Number.isFinite(n)) {
        return n % 360
      }
    }
  } catch {
    /* no-op */
  }
  return DEFAULT_HUE
}

export function ThemeHueProvider({ children }: PropsWithChildren) {
  const [hue, setHueRaw] = useState(loadHue)

  const setHue = useCallback((h: number) => {
    const clamped = ((h % 360) + 360) % 360
    setHueRaw(clamped)
    try {
      window.localStorage.setItem(STORAGE_KEY, String(clamped))
    } catch {
      /* quota exceeded — ignore */
    }
  }, [])

  const value = useMemo(() => ({ hue, setHue }), [hue, setHue])

  return (
    <ThemeHueContext.Provider value={value}>{children}</ThemeHueContext.Provider>
  )
}
