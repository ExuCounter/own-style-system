import { ThemeInterface } from '../types'

const colors = {
  alpha: {
    100: '#F0EBF8',
    200: '#E6DDF3',
    300: '#BFA9E0',
    400: '#9B78CF',
    500: '#8155C2',
    600: '#642DB4',
    700: '#582A9D',
    800: '#4B218A',
  },
  white: '#FFF',
  black: '#000',
}

const fontSizes = {}

export const theme: ThemeInterface = {
  colors,
  fontSizes,
  fontWeights: [300, 400, 500, 600, 700],
}
