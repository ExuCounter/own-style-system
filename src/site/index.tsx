import { Sidebar } from './layout/Sidebar'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'

export const Index = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Sidebar></Sidebar>
    </ThemeProvider>
  )
}
