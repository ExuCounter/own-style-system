import React, { useContext, useMemo, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { getThemeColor } from '../../theme/utils'
import { Box } from '../../components/Box'
import { Select } from '../../components/Select'
import { ValueType } from 'react-select'

type SelectValue = { value: string; label: string }
type SelectStateValue = ValueType<SelectValue, true>

export const Sidebar = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  const [value, setValue] = useState<SelectStateValue>([])

  const onChange = (value: SelectStateValue) => {
    setValue(value)
  }
  return (
    <>
      <Select<SelectValue, true>
        defaultValue={{ value: 'chocolate', label: 'Chocolate' }}
        options={options}
        isMulti
        value={value}
        onChange={onChange}
      />
    </>
  )
}
