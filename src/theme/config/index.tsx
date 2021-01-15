import { BoxTheme } from '../components/box'
import { ComponentsInterface } from '../types'
const dot = require('dot-object')

export const ThemeComponents: ComponentsInterface = dot.dot({
  box: BoxTheme,
})
