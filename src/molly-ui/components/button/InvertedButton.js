import { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'

import MollyThemeContext from '../../contexts/MollyThemeContext'
import { TYPES, COLORS } from '../../helpers/constants'
import { getBaseStyle, getButtonStyle } from '../../helpers/styles'

import ButtonBase from './ButtonBase'

const InvertedButton = ({ type, onClick, children, ...rest }) => {
  const theme = useContext(MollyThemeContext)

  return (
    <ButtonBase
      css={{
        ...type && {
          backgroundColor: theme.colors[COLORS.WHITE].base,
          color: theme.colors[type].base,
          border: `1px solid ${theme.colors[type].base}`,
        },
        boxShadow: 'none',
        '&:hover': {
          ...type && {
            color: theme.colors[type].dark,
            border: `1px solid ${theme.colors[type].dark}`,
          },
          ...theme.elevation.raisedLow,
        },
        '&:disabled': {
          ...type && {
            backgroundColor: theme.colors[type].light,
            color: theme.colors[COLORS.DISABLED_GREY].base
          },
        },
        '&:focus': {
          ...theme.elevation.raisedLow,
        },
        '&:active': {
          ...type && {
            color: theme.colors[type].dark,
            border: `1px solid ${theme.colors[type].dark}`,
          },
          boxShadow: 'none',
        },
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ButtonBase>
  )
}

InvertedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default InvertedButton
