import { useState } from 'react'
import { ValueType } from 'react-select'
import { Select } from '../../components/Select'

const SelectDemo = () => {
  type SelectValue = { value: string; label: string }
  type SelectStateValue = ValueType<SelectValue, true>

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
    <Select<SelectValue, true>
      defaultValue={{ value: 'chocolate', label: 'Chocolate' }}
      options={options}
      isMulti
      value={value}
      onChange={onChange}
    />
  )
}

export default SelectDemo
