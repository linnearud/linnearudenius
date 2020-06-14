import React, { Fragment, useState } from 'react'

import TextInput from '../components/form/TextInput'
import TextArea from '../components/form/TextArea'
import Button from '../components/Button'
import Select from '../components/form/Select'
import Checkbox from '../components/form/Checkbox'
import RadioButton from '../components/form/RadioButton'
import Toggle from '../components/form/Toggle'
import Range from '../components/form/Range'

const Form = props => {
  const [textInput, setTextInput] = useState({ value: '', error: '', valid: null })
  const [textArea, setTextArea] = useState({ value: '', error: '', valid: null })
  const [selected, setSelected] = useState(0)
  const [checkbox, setCheckbox] = useState(false)
  const [radio, setRadio] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [rangeVal, setRangeVal] = useState(0)

  const handleTextInputChange = e => {
    const val = e.target.value
    setTextInput({ value: val, error: '', valid: false })
  }

  const handleTextAreaChange = e => {
    const val = e.target.value
    setTextArea({ value: val, error: '', valid: false })
  }

  const handleInputCleared = () => {
    setTextInput({ value: '', error: '', valid: false })
  }

  const handleTextInputBlur = e => {
    const val = e.target.value
    let error = ''
    let valid = false
    if (val.indexOf('x') !== -1) {
      error = 'Cannot contain x'
    } else if (val.indexOf('valid') !== -1) {
      valid = true
    }
    setTextInput({ value: val, error: error, valid: valid })
  }

  const handleTextAreaBlur = e => {
    const val = e.target.value
    let error = ''
    let valid = false
    if (val.indexOf('x') !== -1) {
      error = 'Cannot contain x'
    } else if (val.indexOf('valid') !== -1) {
      valid = true
    }
    setTextArea({ value: val, error: error, valid: valid })
  }

  const onButtonClick = e => {
    console.log('Text Input', textInput)
    console.log('Text Area', textArea)
    console.log('Select', selected)
    console.log('Checkbox', checkbox)
    console.log('Radio', radio)
    console.log('Toggle', toggle)
    console.log('Range', rangeVal)
  }

  return (
    <Fragment>
      <TextInput
        label='Text Input'
        placeholder='Text Here'
        maxLength={20}
        value={textInput.value}
        error={textInput.error}
        valid={textInput.valid}
        onChange={handleTextInputChange}
        onClearInput={handleInputCleared}
        onBlur={handleTextInputBlur}
      />
      <TextArea
        label='Text Area'
        placeholder='Text Here'
        maxLength={200}
        value={textArea.value}
        error={textArea.error}
        valid={textArea.valid}
        onChange={handleTextAreaChange}
        onBlur={handleTextAreaBlur}
      />
      <Select
        label='Select'
        placeholder='Select here'
        options={{
          0: 'Option 1',
          1: 'Option 2',
          2: 'Option 3',
        }}
        selected={selected}
        onChange={e => setSelected(e.target.value)}
      />
      <Checkbox
        label={'Checkbox'}
        type='secondary'
        checked={checkbox}
        onChange={e => setCheckbox(!checkbox)}
      >
        {' '}
        Option{' '}
      </Checkbox>
      <RadioButton
        label={'Radio 1'}
        type='primary'
        checked={radio === '1'}
        value={1}
        name='radio'
        onChange={e => setRadio(e.target.value)}
      >
        {' '}
        Option 1{' '}
      </RadioButton>
      <RadioButton
        type='general'
        checked={radio === '2'}
        value={2}
        name='radio'
        onChange={e => setRadio(e.target.value)}
      >
        {' '}
        Option 2{' '}
      </RadioButton>
      <Toggle
        label={'Toggle'}
        type='secondary'
        checked={toggle}
        onChange={e => setToggle(!toggle)}
      >
        {' '}
        Option{' '}
      </Toggle>
      <Range
        label='Range'
        type='primary'
        value={rangeVal}
        onChange={e => setRangeVal(e.target.value)}
        max={10}
      />
      <Button type='primary' onClick={onButtonClick}>
        {' '}
        Submit{' '}
      </Button>
    </Fragment>
  )
}

export default Form
