import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../../contexts/MollyThemeContext'
import { Caption } from '../../components/Typography'
import { TYPES, COLORS } from '../../helpers/constants'
import { getBaseStyle, getInteractiveStyleByType, getFormStyle } from '../../helpers/styles'

const Toggle = ({ type, label, checked, disabled, onChange, children, ...rest }) => {
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
            width: theme.baseFontSize * 2,
            height: theme.baseFontSize + 3,
            opacity: 0,
            zIndex: 1,
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
            height: theme.lineHeights.body.base,
            alignItems: 'center',
          }}
        >
          <div
            css={{
              ...(checked ? {backgroundColor: theme.colors[type].base} : formStyle.base),
              ...(disabled && formStyle.disabled),
              width: theme.baseFontSize * 2,
              height: theme.baseFontSize,
              borderRadius: theme.baseFontSize,
              position: 'relative',
              transition: 'background .5s linear, border .5s linear',
              ...(hasFocus && formStyle.focus),
              ...hover && formStyle.hover,
            }}
          >
            <div
              css={{
                width: theme.baseFontSize - 3,
                height: theme.baseFontSize - 3,
                position: 'absolute',
                top: 1.5,
                ...(checked
                  ? {
                      left: theme.baseFontSize + 2,
                      backgroundColor: theme.colors[type].foreground,
                    }
                  : {
                      left: 1,
                      backgroundColor: theme.colors[type].base,
                    }),
                ...(disabled && {
                  backgroundColor: theme.colors[COLORS.DISABLED_GREY].base,
                }),
                zIndex: 0,
                borderRadius: theme.baseFontSize,
                transition: 'all .5s linear',
              }}
            ></div>
          </div>
          <div
            css={{
              padding: `0px ${theme.baseFontSize / 2}px`,
              cursor: 'pointer',
              ...(disabled && {
                cursor: 'auto',
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

Toggle.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
}

Toggle.defaultProps = {
  type: TYPES.PRIMARY,
}

export default Toggle
