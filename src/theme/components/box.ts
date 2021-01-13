type BoxThemeInterface = {
  bg: string
  danger: {
    bg: string
    color: string
  }
  success: {
    bg: string
    color: string
  }
}

export const BoxTheme: BoxThemeInterface = {
  bg: 'white',
  danger: {
    bg: 'epsilon.400',
    color: 'white',
  },
  success: {
    bg: 'gamma.400',
    color: 'white',
  },
}
