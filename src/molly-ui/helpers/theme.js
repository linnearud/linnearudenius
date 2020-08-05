import { getDarkVariant, getLightVariant, getForeground } from './colors'

export const validateTheme = theme => {
  const requiredFields = {
    colors: [
      'primary',
      'secondary',
      'tertiary',
      'black',
      'darkGrey',
      'disabledGrey',
      'lightGrey',
      'white',
      'success',
      'failure',
    ],
    fontFamily: [],
    baseFontSize: [],
    typeScale: [],
    lineHeightRatio: [],
    headingLineHeightRatio: [],
    componentMargin: [],
  }

  Object.keys(requiredFields).forEach(key => {
    if (theme[key] === undefined) {
      throw new Error(`Error creating theme. Theme must contain key ${key}`)
    } else {
      requiredFields[key].forEach(subKey => {
        if (theme[key][subKey] === undefined) {
          throw new Error(`Error creating theme. ${key} must contain key ${subKey}`)
        }
      })
    }
  })
}

export const createFullTheme = theme => ({
  colors: {
    primary: {
      base: theme.colors.primary,
      foreground: getForeground(theme.colors.primary),
      dark: getDarkVariant(theme.colors.primary),
      light: getLightVariant(theme.colors.primary),
    },
    secondary: {
      base: theme.colors.secondary,
      foreground: getForeground(theme.colors.secondary),
      dark: getDarkVariant(theme.colors.secondary),
      light: getLightVariant(theme.colors.secondary),
    },
    tertiary: {
      base: theme.colors.tertiary,
      foreground: getForeground(theme.colors.tertiary),
      dark: getDarkVariant(theme.colors.tertiary),
      light: getLightVariant(theme.colors.tertiary),
    },
    general: {
      base: theme.colors.white,
      foreground: theme.colors.black,
    },
    success: {
      base: theme.colors.success,
      foreground: getForeground(theme.colors.success),
      dark: getDarkVariant(theme.colors.success),
      light: getLightVariant(theme.colors.success),
    },
    failure: {
      base: theme.colors.failure,
      foreground: getForeground(theme.colors.failure),
      dark: getDarkVariant(theme.colors.failure),
      light: getLightVariant(theme.colors.failure),
    },
    black: {
      base: theme.colors.black,
      foreground: getForeground(theme.colors.black),
      dark: getDarkVariant(theme.colors.black),
      light: getLightVariant(theme.colors.black),
    },
    darkGrey: {
      base: theme.colors.darkGrey,
      foreground: getForeground(theme.colors.darkGrey),
      dark: getDarkVariant(theme.colors.darkGrey),
      light: getLightVariant(theme.colors.darkGrey),
    },
    disabledGrey: {
      base: theme.colors.disabledGrey,
      foreground: getForeground(theme.colors.disabledGrey),
      dark: getDarkVariant(theme.colors.disabledGrey),
      light: getLightVariant(theme.colors.disabledGrey),
    },
    lightGrey: {
      base: theme.colors.lightGrey,
      foreground: getForeground(theme.colors.lightGrey),
      dark: getDarkVariant(theme.colors.lightGrey),
      light: getLightVariant(theme.colors.lightGrey),
    },
    white: {
      base: theme.colors.white,
      foreground: getForeground(theme.colors.white),
      dark: getDarkVariant(theme.colors.white),
      light: getLightVariant(theme.colors.white),
    },
  },
  fontFamily: theme.fontFamily,
  baseFontSize: theme.baseFontSize,
  typeScale: theme.typeScale,
  lineHeightRatio: theme.lineHeightRatio,
  headingLineHeightRatio: theme.headingLineHeightRatio,
  fontSizes: {
    h1: Math.pow(theme.typeScale, 5),
    h2: Math.pow(theme.typeScale, 4),
    h3: Math.pow(theme.typeScale, 3),
    h4: Math.pow(theme.typeScale, 2),
    h5: Math.pow(theme.typeScale, 1),
    body: {
      large: Math.pow(theme.typeScale, 1),
      base: Math.pow(theme.typeScale, 0),
      small: Math.pow(theme.typeScale, -1),
    },
    caption: Math.pow(theme.typeScale, -2),
  },
  lineHeights: {
    h1: theme.headingLineHeightRatio * Math.pow(theme.typeScale, 5) * theme.baseFontSize,
    h2: theme.headingLineHeightRatio * Math.pow(theme.typeScale, 4) * theme.baseFontSize,
    h3: theme.headingLineHeightRatio * Math.pow(theme.typeScale, 3) * theme.baseFontSize,
    h4: theme.headingLineHeightRatio * Math.pow(theme.typeScale, 2) * theme.baseFontSize,
    h5: theme.headingLineHeightRatio * Math.pow(theme.typeScale, 1) * theme.baseFontSize,
    body: {
      large: theme.lineHeightRatio * Math.pow(theme.typeScale, 1) * theme.baseFontSize,
      base: theme.lineHeightRatio * Math.pow(theme.typeScale, 0) * theme.baseFontSize,
      small: theme.lineHeightRatio * Math.pow(theme.typeScale, -1) * theme.baseFontSize,
    },
    caption: theme.lineHeightRatio * Math.pow(theme.typeScale, -2) * theme.baseFontSize,
  },
  fontWeights: {
    h1: 300,
    h2: 700,
    h3: 'normal',
    h4: 'normal',
    h5: 700,
    body: {
      large: 'normal',
      base: 'normal',
      small: 'normal',
    },
    caption: 'normal',
  },
  borderRadius: theme.borderRadius,
  componentMargin: theme.componentMargin,
  elevation: {
    raisedLow: {
      boxShadow: '-1px 1px 1px 0 rgba(0,0,0,0.20)',
    },
    raised: {
      boxShadow: '0px 1px 1px 0 rgba(0,0,0,0.20)',
    },
    raisedHigh: {
      boxShadow: '-2px 2px 2px 0 rgba(0,0,0,0.20)'
    },
    overlay: {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.30)',
    },
    overlayHigh: {
      boxShadow: '0 6px 8px 0 rgba(0,0,0,0.30)',
    }
  },
})
