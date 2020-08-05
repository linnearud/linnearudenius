import { useContext } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import MollyThemeContext from "../contexts/MollyThemeContext";
import { COLORS, SIZES } from "../helpers/constants";
import { getBaseStyle } from "../helpers/styles";

const propTypes = {
  color: PropTypes.oneOf(Object.values(COLORS)),
  children: PropTypes.node,
};

const defaultProps = {
  color: COLORS.BLACK,
};

export const H1 = ({ color, children, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  return (
    <h1
      css={{
        ...getBaseStyle(theme),
        fontSize: `${theme.fontSizes.h1}em`,
        lineHeight: `${theme.lineHeights.h1}px`,
        fontWeight: theme.fontWeights.h1,
        color: theme.colors[color].base,
        margin: theme.baseFontSize,
      }}
      {...rest}
    >
      {children}
    </h1>
  );
};

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export const H2 = ({ color, children, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  return (
    <h2
      css={{
        ...getBaseStyle(theme),
        fontSize: `${theme.fontSizes.h2}em`,
        lineHeight: `${theme.lineHeights.h2}px`,
        fontWeight: theme.fontWeights.h2,
        color: theme.colors[color].base,
        margin: theme.baseFontSize,
      }}
      {...rest}
    >
      {children}
    </h2>
  );
};

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

export const H3 = ({ color, children, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  return (
    <h3
      css={{
        ...getBaseStyle(theme),
        fontSize: `${theme.fontSizes.h3}em`,
        lineHeight: `${theme.lineHeights.h3}px`,
        fontWeight: theme.fontWeights.h3,
        color: theme.colors[color].base,
        margin: theme.baseFontSize,
      }}
      {...rest}
    >
      {children}
    </h3>
  );
};

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

export const H4 = ({ color, children, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  return (
    <h4
      css={{
        ...getBaseStyle(theme),
        fontSize: `${theme.fontSizes.h4}em`,
        lineHeight: `${theme.lineHeights.h4}px`,
        fontWeight: theme.fontWeights.h4,
        color: theme.colors[color].base,
        margin: theme.baseFontSize * 0.5,
      }}
      {...rest}
    >
      {children}
    </h4>
  );
};

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

export const H5 = ({ color, children, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  return (
    <h5
      css={{
        ...getBaseStyle(theme),
        fontSize: `${theme.fontSizes.h5}em`,
        lineHeight: `${theme.lineHeights.h5}px`,
        fontWeight: theme.fontWeights.h5,
        color: theme.colors[color].base,
        margin: theme.baseFontSize * 0.5,
      }}
      {...rest}
    >
      {children}
    </h5>
  );
};

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

export const Body = ({ color, size, component, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  return jsx(component, {
    css: {
      ...getBaseStyle(theme),
      fontSize: `${theme.fontSizes.body[size]}em`,
      lineHeight: `${theme.lineHeights.body[size]}px`,
      fontWeight: theme.fontWeights.body[size],
      color: theme.colors[color].base,
    },
    ...rest,
  });
};

Body.propTypes = {
  color: PropTypes.oneOf(Object.values(COLORS)),
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZES)),
};
Body.defaultProps = {
  color: COLORS.BLACK,
  size: SIZES.BASE,
  component: 'div',
};

export const Caption = ({ color, children, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  return (
    <span
      css={{
        ...getBaseStyle(theme),
        fontSize: `${theme.fontSizes.caption}em`,
        lineHeight: `${theme.lineHeights.caption}px`,
        fontWeight: theme.fontWeights.caption,
        color: theme.colors[color].base,
      }}
      {...rest}
    >
      {children}
    </span>
  );
};

Caption.propTypes = propTypes;
Caption.defaultProps = defaultProps;
