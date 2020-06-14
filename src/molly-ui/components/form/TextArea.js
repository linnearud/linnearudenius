import { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../../contexts/MollyThemeContext'
import { Caption } from '../Typography'
import {
  getBaseStyle,
  getFormStyle,
  getInputOverrides,
} from '../../helpers/styles'
import { COLORS } from '../../helpers/constants'

const TextArea = ({
  label,
  value,
  error,
  valid,
  maxLength,
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
        css={{
          display: 'flex',
        }}
        color={COLORS.DARK_GREY}
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
          ...(error !== '' && formStyle.error),
          ...(valid && formStyle.success),
          display: 'flex',
          alignItems: 'center',
          borderRadius: theme.borderRadius,
          '&:hover': {
            ...(!disabled && formStyle.hover),
          },
        }}
      >
        <textarea
          css={{
            ...getInputOverrides(theme),
            flexGrow: 1,
            '&:focus' : {
              outline: 'none',
              ...formStyle.focus,
            }
          }}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          disabled={disabled}
          {...rest}
        />
      </div>
      {error !== '' && (
        <Caption
          css={{
            alignSelf: 'flex-end',
            color: theme.colors[COLORS.FAILURE],
          }}
          color={COLORS.FAILURE}
        >
          {error}
        </Caption>
      )}
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  valid: PropTypes.bool,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

TextArea.defaultProps = {
  label: '',
  value: '',
  error: '',
}

export default TextArea
