import { useContext } from 'react'
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

export const Range = ({ value, type, label, disabled, onChange, ...rest }) => {
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
      <div
        css={{
          display: 'flex',
          padding: '0px 5px',
        }}
      >
        <Caption css={{ flexGrow: 1 }} color={COLORS.DARK_GREY}>
          {label}
        </Caption>
        <Caption color={COLORS.DARK_GREY}>{value}</Caption>
      </div>
      <input
        css={{
          '-webkit-appearance': 'none',
          '::-webkit-slider-runnable-track': {
            width: '100%',
            height: theme.baseFontSize / 3,
            animate: '0.2s',
            borderRadius: theme.baseFontSize / 3,
            ...(disabled
              ? { backgroundColor: theme.colors[COLORS.DISABLED_GREY].base }
              : { backgroundColor: theme.colors[type].base }),
          },
          '::-webkit-slider-thumb': {
            height: theme.baseFontSize,
            width: theme.baseFontSize,
            borderRadius: theme.baseFontSize,
            '-webkit-appearance': 'none',
            margin: -theme.baseFontSize / 3,
            zIndex: 1,
            ...(disabled ? { display: 'none' } : formStyle.base),
            cursor: 'pointer',
            '&:hover': formStyle.hover,
          },
          '&:focus': {
            outline: 'none',
            '::-webkit-slider-thumb': formStyle.focus,
          },
        }}
        value={value}
        type='range'
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}

Range.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

Range.defaultProps = {
  type: TYPES.PRIMARY,
}

export default Range
