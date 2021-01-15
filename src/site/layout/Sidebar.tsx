import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { getThemeColor } from '../../theme/utils'

export const Sidebar = () => {
  const theme = useContext(ThemeContext)
  const color = getThemeColor('box.danger.bg')(theme)

  return <div></div>
}
