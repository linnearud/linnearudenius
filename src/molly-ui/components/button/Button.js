import { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../../contexts/MollyThemeContext'
import { TYPES, COLORS } from '../../helpers/constants'
import { getBaseStyle, getButtonStyle } from '../../helpers/styles'

import ButtonBase from './ButtonBase'

export const Button = ({ type, onClick, children, ...rest }) => {
  const theme = useContext(MollyThemeContext)

  return (
    <ButtonBase
      css={{
        ...type && {
          backgroundColor: theme.colors[type].base,
          color: theme.colors[type].foreground,
        },
        '&:disabled': {
          ...type && {
            backgroundColor: theme.colors[type].light,
            color: theme.colors[COLORS.DISABLED_GREY].base
          },
        },
        '&:active': {
          ...type && {
            border: `1px solid ${theme.colors[COLORS.LIGHT_GREY].base}`,
          }
        },
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Button
