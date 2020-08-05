import { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Caption } from '../Typography'
import CloseIcon from '../../icons/CloseIcon'
import MollyThemeContext from '../../contexts/MollyThemeContext'
import {
  getBaseStyle,
  getFormStyle,
  getInputOverrides,
} from '../../helpers/styles'
import { COLORS } from '../../helpers/constants'

export const TextInput = ({
  label,
  value,
  error,
  valid,
  maxLength,
  onClearInput,
  onChange,
  disabled,
  ...rest
}) => {
  const theme = useContext(MollyThemeContext)
  const formStyle = getFormStyle(theme)

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        margin: theme.componentMargin,
        ...getBaseStyle(theme),
      }}
    >
      <Caption
        color={COLORS.DARK_GREY}
        css={{
          display: 'flex',
        }}
      >
        <label css={{ flexGrow: 1 }}>{label}</label>
        {maxLength && (
          <label>
            {value.length} / {maxLength}
          </label>
        )}
      </Caption>
      <div
        css={{
          ...(disabled ? formStyle.disabled : formStyle.base),
          ...(error !== '' && formStyle.error ),
          ...(valid && formStyle.success ),
          display: 'flex',
          alignItems: 'baseline',
          borderRadius: theme.borderRadius,
          '&:hover': !disabled && formStyle.hover,
        }}
      >
        <input
          css={{
            ...getInputOverrides(theme),
            flexGrow: 1,
            '&:focus' : {
              outline: 'none',
              ...formStyle.hover,
            }
          }}
          type='text'
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          disabled={disabled}
          {...rest}
        />
        {onClearInput && value !== '' && (
          <CloseIcon
            css={{
              padding: '0 5px',
              cursor: 'pointer',
              height: theme.baseFontSize,
              width: theme.baseFontSize,
              stroke: theme.colors[COLORS.DARK_GREY].base,
            }}
            onClick={onClearInput}
          />
        )}
      </div>
      {error !== '' && (
        <Caption
          css={{
            alignSelf: 'flex-end',
          }}
          color={COLORS.FAILURE}
        >
          {error}
        </Caption>
      )}
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  valid: PropTypes.bool,
  maxLength: PropTypes.number,
  onClearInput: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

TextInput.defaultProps = {
  label: '',
  value: '',
  error: '',
}

export default TextInput
