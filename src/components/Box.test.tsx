import TestRenderer from 'react-test-renderer'
import { Box } from './Box'

test('Render correctly Box component', () => {
  const component = TestRenderer.create(<Box>something</Box>).toJSON()
  expect(component).toMatchSnapshot()
})
