import { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../../contexts/MollyThemeContext'
import { TYPES } from '../../helpers/constants'
import { getBaseStyle, getButtonStyle } from '../../helpers/styles'

const ButtonBase = ({ onClick, children, ...rest }) => {
  const theme = useContext(MollyThemeContext)
  const buttonStyle = getButtonStyle(theme, TYPES.GENERAL)

  return (
    <button
      css={{
        ...getBaseStyle(theme),
        borderRadius: theme.borderRadius,
        margin: theme.componentMargin,
        padding: '10px 20px',
        ...buttonStyle.base,
        '&:hover': {
          ...buttonStyle.hover,
          cursor: 'pointer',
        },
        '&:disabled': {
          ...buttonStyle.disabled,
          '&:hover': {
            cursor: 'auto',
          },
        },
        '&:focus': {
          outline: 'none',
          ...buttonStyle.focus,
        },
        '&:active': buttonStyle.active,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

ButtonBase.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default ButtonBase
