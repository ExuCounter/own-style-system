import React from 'react'
import RSelect, {
  Props as RSelectProps,
  OptionTypeBase,
  components,
} from 'react-select'

export type SelectProps<
  OptionType extends OptionTypeBase,
  U extends boolean
> = RSelectProps<OptionType, U>

export const Select = <OptionType, U extends boolean>({
  components,
  ...props
}: SelectProps<OptionType, U>) => {
  return (
    <RSelect<OptionType, U>
      components={{
        ...components,
      }}
      {...props}
    ></RSelect>
  )
}
