import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../../contexts/MollyThemeContext'
import { Caption } from '../Typography'
import { TYPES, COLORS } from '../../helpers/constants'
import {
  getBaseStyle,
  getFormStyle,
} from '../../helpers/styles'

const RadioButton = ({ type, label, checked, disabled, onChange, children, ...rest }) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [hover, setHover] = useState(false)

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
      <Caption color={COLORS.DARK_GREY}>{label}</Caption>
      <div css={{ position: 'relative' }}>
        <input
          css={{
            margin: 0,
            width: theme.baseFontSize + 3,
            height: theme.baseFontSize + 3,
            opacity: 0,
            position: 'absolute',
            top: (theme.lineHeights.body.base - theme.baseFontSize - 3) / 2,
            left: 0,
            cursor: 'pointer',
            '&:disabled': {
              cursor: 'auto',
            },
          }}
          type='radio'
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          onMouseEnter={() => setHover(!disabled)}
          onMouseLeave={() => setHover(false)}
          {...rest}
        />
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            height: `${theme.lineHeights.body.base}px`,
          }}
        >
          <div
            css={{
              ...formStyle.base,
              ...(checked && {backgroundColor: theme.colors[type].base} ),
              ...(disabled && formStyle.disabled),
              width: theme.baseFontSize,
              height: theme.baseFontSize,
              borderRadius: theme.baseFontSize,
              display: 'flex',
              ...(hasFocus && formStyle.focus),
              ...(hover && formStyle.hover),
            }}
          >
            <div
              css={{
                width: theme.baseFontSize / 2 - 1,
                height: theme.baseFontSize / 2  - 1,
                margin: 'auto',
                borderRadius: theme.baseFontSize / 2,
                backgroundColor: theme.colors[type].foreground,
                visibility: 'hidden',
                opacity: 0,
                ...(checked && { opacity: 1, visibility: 'visible' }),
                transition: 'opacity .2s ease-in',
              }}
            ></div>
          </div>
          <div
            css={{
              padding: `0px ${theme.baseFontSize / 2}px`,
              ...(disabled && {
                color: formStyle.disabled.color,
              }),
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

RadioButton.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

RadioButton.defaultProps = {
  type: TYPES.PRIMARY,
}

export default RadioButton
