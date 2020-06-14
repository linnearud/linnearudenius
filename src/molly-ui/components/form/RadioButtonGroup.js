import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import RadioButton from './RadioButton'
import MollyThemeContext from '../../contexts/MollyThemeContext'
import { TYPES, COLORS } from '../../helpers/constants'

export const RadioButtonGroup = ({ type, label, options, name, value, onChange, ...rest }) => {
  const theme = useContext(MollyThemeContext)

  return options.map((option, index) => {
    return (
      <RadioButton
        key={index}
        label={index === 0 ? label : null}
        type={type}
        checked={value === option}
        name={name}
        value={option}
        onChange={onChange}
        {...rest}
      >
        {option}
      </RadioButton>
    )
  })
}

RadioButtonGroup.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

RadioButtonGroup.defaultProps = {
  type: TYPES.PRIMARY,
}

export default RadioButtonGroup
