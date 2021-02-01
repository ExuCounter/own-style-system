import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
  width: 300px;
  background-color: #2f2f70;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 15px;
  a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 15px;
  }
`

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Link to="/box">Box</Link>
      <Link to="/select">Select</Link>
    </SidebarWrapper>
  )
}
