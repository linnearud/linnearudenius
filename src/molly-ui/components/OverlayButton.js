import { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../contexts/MollyThemeContext'
import { TYPES } from '../helpers/constants'
import { getBaseStyle, getButtonStyle } from '../helpers/styles'

const OverlayButton = ({ type, size, onClick, children, ...rest }) => {
  const theme = useContext(MollyThemeContext)
  const buttonStyle = getButtonStyle(theme, type, true)

  return (
    <button
      css={{
        ...getBaseStyle(theme),
        width: size,
        height: size,
        borderRadius: size,
        margin: theme.componentMargin,
        padding: '10px 10px',
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

OverlayButton.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

OverlayButton.defaultProps = {
  type: TYPES.PRIMARY,
}

export default OverlayButton
