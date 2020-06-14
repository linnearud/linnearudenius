import React, { useState } from 'react'

export const withValueState = WrappedComponent => props => {
  const [value, setValue] = useState('')
  return (
    <WrappedComponent {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}

export const withCheckedState = WrappedComponent => props => {
  const [checked, setChecked] = useState(false)
  return (
    <WrappedComponent {...props} checked={checked} onChange={e => setChecked(!checked)} />
  )
}

export const withSelectedState = WrappedComponent => props => {
  const [selected, setSelected] = useState('')
  return (
    <WrappedComponent
      {...props}
      selected={selected}
      onChange={e => setSelected(e.target.value)}
    />
  )
}
