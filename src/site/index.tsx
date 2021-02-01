import { Sidebar } from './layout/Sidebar'
import { Content } from './layout/Content'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'
import { BrowserRouter as Router } from 'react-router-dom'
import '../index.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

export const Index = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Wrapper>
          <Sidebar />
          <Content />
        </Wrapper>
      </Router>
    </ThemeProvider>
  )
}
