import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../../contexts/MollyThemeContext'
import { Caption } from '../Typography'
import CheckIcon from '../../icons/CheckIcon'
import { TYPES, COLORS } from '../../helpers/constants'
import {
  getBaseStyle,
  getFormStyle,
} from '../../helpers/styles'
import { draw } from '../../helpers/keyframes'

const Checkbox = ({ type, label, checked, disabled, onChange, children, ...rest }) => {
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
          type='checkbox'
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
            height: theme.lineHeights.p,
            alignItems: 'center',
          }}
        >
          <div
            css={{
              ...(checked
                ? { backgroundColor: theme.colors[type].base }
                : formStyle.base),
              ...(disabled && formStyle.disabled),
              width: theme.baseFontSize,
              height: theme.baseFontSize,
              borderRadius: theme.borderRadius,
              ...(hasFocus && formStyle.focus),
              ...(hover && formStyle.hover),
            }}
          >
            {checked && (
              <CheckIcon
                css={{
                  strokeDasharray: 100,
                  strokeDashoffset: 100,
                  animation: `${draw} 2s linear forwards`,
                }}
                color={theme.colors[type].foreground}
              />
            )}
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

Checkbox.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
}

Checkbox.defaultProps = {
  type: TYPES.PRIMARY,
}

export default Checkbox
