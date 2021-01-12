import React from 'react'
import RSelect, { Props as RSelectProps } from 'react-select'

type SelectProps = RSelectProps

export const Select = (props: SelectProps) => {
  return <RSelect {...props}></RSelect>
}
