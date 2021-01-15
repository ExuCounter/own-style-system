import { Theme } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { ThemeComponents } from '../config'

export const getThemeColor = (path: string, fallback?: string) => (
  theme: Theme
) => {
  const value = ThemeComponents[path] || fallback || null
  return themeGet(`components.${path}`, value)({ theme })
}
