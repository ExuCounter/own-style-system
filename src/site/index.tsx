import { Sidebar } from './layout/Sidebar'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

export const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar></Sidebar>
    </ThemeProvider>
  )
}
