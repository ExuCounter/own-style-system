import * as CSS from 'csstype'
type Color = CSS.Property.Color
type FontWeightsType = (300 | 400 | 500 | 600 | 700)[]

interface Colors {
  100: Color
  200: Color
  300: Color
  400: Color
  500: Color
  600: Color
  700: Color
  800: Color
}

export interface ColorsInterface {
  alpha: Colors
  //   beta: Colors
  //   gamma: Colors
  //   delta: Colors
  //   epsilon: Colors
  white: Color
  black: Color
  //   transparent: Colors
}

export interface FontSizesType {
  [s: string]: string
}

export interface ThemeInterface {
  colors: ColorsInterface
  fontWeights: FontWeightsType
  fontSizes: FontSizesType
}
