import { createContext } from 'react'

export type ThemeHueContextValue = {
  hue: number
  setHue: (h: number) => void
}

export const ThemeHueContext = createContext<ThemeHueContextValue>({
  hue: 155,
  setHue: () => {},
})
