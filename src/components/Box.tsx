import {
  space,
  color,
  borders,
  shadow,
  overflow,
  position,
  background,
  OverflowProps,
  BordersProps,
  ShadowProps,
  SpaceProps,
  ColorProps,
  PositionProps,
  BackgroundProps,
} from 'styled-system'
import { ComponentPropsWithRef, forwardRef } from 'react'
import styled from 'styled-components'

type BoxCoreProps = SpaceProps &
  ColorProps &
  BordersProps &
  ShadowProps &
  OverflowProps &
  PositionProps &
  BackgroundProps

type BoxProps = ComponentPropsWithRef<'div'> & BoxCoreProps

const StyledBox = styled.div<BoxCoreProps>`
  display: block;
  ${space}
  ${color}
  ${borders}
  ${shadow}
  ${overflow}
  ${position}
  ${background}
`

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <StyledBox ref={ref} {...props} />
})

export default Box
