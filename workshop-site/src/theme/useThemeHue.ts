import { useContext } from 'react'
import { ThemeHueContext } from './themeHueState'

export function useThemeHue() {
  return useContext(ThemeHueContext)
}
