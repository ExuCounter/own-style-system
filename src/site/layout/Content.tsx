import BoxDemo from '../components/BoxDemo'
import SelectDemo from '../components/SelectDemo'
import { DaterangeDemo } from '../components/DaterangeDemo'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`

export const Content = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/box" component={BoxDemo} exact />
        <Route path="/select" component={SelectDemo} exact />
        <Route path="/daterange" component={DaterangeDemo} exact />
      </Switch>
    </Wrapper>
  )
}
