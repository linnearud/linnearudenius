import { TYPES, COLORS } from './constants'

export const getBaseStyle = theme => ({
  fontFamily: theme.fontFamily,
  fontSize: `${theme.baseFontSize}px`,
  lineHeight: `${theme.baseFontSize * theme.lineHeightRatio}px`,
  color: 'currentColor',
})

export const getColorStyle = (theme, color) => ({})

export const getFormStyle = theme => {
  return {
    base: {
      backgroundColor: theme.colors[COLORS.WHITE].base,
      color: theme.colors[COLORS.BLACK].base,
      border: `1px solid ${theme.colors[COLORS.LIGHT_GREY].base}`,
      borderBottom: `1px solid ${theme.colors[COLORS.DARK_GREY].base}`,
    },
    hover: {
      ...theme.elevation.raised,
    },
    focus: {
      ...theme.elevation.raised,
    },
    disabled: {
      color: theme.colors[COLORS.DISABLED_GREY].base,
      borderBottom: `1px solid ${theme.colors[COLORS.DISABLED_GREY].base}`,
    },
    error: {
      borderBottom: `1px solid ${theme.colors[COLORS.FAILURE].base}`,
    },
    success: {
      borderBottom: `1px solid ${theme.colors[COLORS.SUCCESS].base}`,
    },
  }
}

export const getButtonStyle = (theme, type, overlay) => {
  if (type === TYPES.GENERAL) {
    return {
      base: {
        backgroundColor: theme.colors[COLORS.WHITE].base,
        color: theme.colors[COLORS.BLACK].base,
        border: 'none',
        ...(overlay ? theme.elevation.overlay : theme.elevation.raised),
      },
      hover: overlay ? theme.elevation.overlayHigh : theme.elevation.raisedHigh,
      focus: overlay ? theme.elevation.overlayHigh : theme.elevation.raisedHigh,
      active: {
        boxShadow: 'none',
        border: `1px solid ${theme.colors[COLORS.LIGHT_GREY].base}`,
      },
      disabled: {
        color: theme.colors[COLORS.DISABLED_GREY].base,
        border: `1px solid ${theme.colors[COLORS.DISABLED_GREY].base}`,
        boxShadow: 'none',
      },
    }
  } else {
    return {
      base: {
        backgroundColor: theme.colors[type].base,
        color: theme.colors[type].foreground,
        border: 'none',
        ...(overlay ? theme.elevation.overlay : theme.elevation.raised),
      },
      hover: overlay ? theme.elevation.overlayHigh : theme.elevation.raisedHigh,
      focus: overlay ? theme.elevation.overlayHigh : theme.elevation.raisedHigh,
      active: {
        boxShadow: 'none',
        border: `1px solid ${theme.colors[COLORS.LIGHT_GREY].base}`,
      },
      disabled: {
        backgroundColor: theme.colors[type].light,
        color: theme.colors[COLORS.DISABLED_GREY].base,
        boxShadow: 'none',
      },
    }
  }
}

export const getInputOverrides = theme => ({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  padding: '5px',
  border: 'none',
  backgroundColor: 'inherit',
  color: 'inherit',
  '::placeholder': {
    color: theme.colors[COLORS.DARK_GREY].base,
  },
  '&:disabled': {
    '::placeholder': {
      color: theme.colors[COLORS.DISABLED_GREY].base,
    },
  },
})
