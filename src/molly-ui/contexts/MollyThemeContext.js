import React from 'react'
import defaultTheme from '../themes/default'
import {validateTheme, createFullTheme} from '../helpers/theme.js'
/** @jsx jsx */
import { jsx } from '@emotion/core'

export const MollyThemeContext = React.createContext(createFullTheme(defaultTheme))

export const MollyThemeProvider = ({ theme, children }) => {
  const currentTheme = theme || defaultTheme
  validateTheme(currentTheme)
  const fullTheme = createFullTheme(currentTheme)
  return (
    <MollyThemeContext.Provider value={fullTheme}>
      {children}
    </MollyThemeContext.Provider>
  )
}

export default MollyThemeContext
