import { useContext, createContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Portal } from "react-portal";

import MollyThemeContext from "../../contexts/MollyThemeContext";
import { TYPES, COLORS } from "../../helpers/constants";
import CloseIcon from "../../icons/CloseIcon";
import CaretIcon from "../../icons/CaretIcon";
import { getBaseStyle } from "../../helpers/styles";
import { getForeground } from "../../helpers/colors";
import { tablet, desktop } from "../../helpers/breakpoints";

export const POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
};

const SideNavContext = createContext({
  hoverColor: COLORS.PRIMARY,
  backgroundColor: COLORS.LIGHT_GREY,
});

export const Container = ({
  children,
  position,
  color,
  hoverColor,
  onClose,
  persist,
  visible,
  hasTopNav,
  ...rest
}) => {
  const theme = useContext(MollyThemeContext);
  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    onClose();
  };

  useEffect(() => {
    if (!persist && visible) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      if (!persist && visible) {
        document.removeEventListener("mousedown", handleClick);
      }
    };
  }, [persist, visible]);

  return (
    <Portal>
      <div
        ref={node}
        css={{
          ...getBaseStyle(theme),
          position: "fixed",
          top: 0,
          backgroundColor: theme.colors[color].base,
          color: theme.colors[color].foreground,
          width: "100%",
          height: visible ? "100vh" : 0,
          transition: "height 0.2s",
          ...(position == POSITIONS.RIGHT && {
            marginLeft: "auto",
          }),
          boxShadow: "0 5px 10px rgba(0,0,0,0.20)",
          overflowY: "auto",
          overflowX: "hidden",
          ...tablet({
            ...(hasTopNav && { top: 4 * theme.baseFontSize }),
            width: visible ? "200px" : 0,
            height: hasTopNav
              ? `calc(100vh - ${4 * theme.baseFontSize}px)`
              : "100vh",
            transition: "width 0.2s",
            boxShadow:
              position == POSITIONS.RIGHT
                ? "-5px 5px 10px rgba(0,0,0,0.20)"
                : "5px 5px 10px rgba(0,0,0,0.20)",
          }),
          ...desktop({
            width: visible ? "300px" : 0,
          }),
        }}
        {...rest}
      >
        <div
          css={{
            textAlign: "right",
            ...tablet({
              ...{ display: "none" },
            }),
          }}
        >
          <Item onClick={onClose}>
            <CaretIcon
              css={{
                width: "12px",
                transform: "rotate(90deg)",
              }}
              onClick={onClose}
            />
          </Item>
        </div>
        <SideNavContext.Provider
          value={{ hoverColor: hoverColor, backgroundColor: color }}
        >
            {children}
        </SideNavContext.Provider>
      </div>
    </Portal>
  );
};

Container.defaultProps = {
  position: POSITIONS.LEFT,
  hoverColor: COLORS.PRIMARY,
  color: COLORS.LIGHT_GREY,
  persist: false,
};

export const Item = ({
  text,
  children,
  id,
  onClick,
  level,
  caretDirection,
  active,
  ...rest
}) => {
  const theme = useContext(MollyThemeContext);
  const sideNavCtx = useContext(SideNavContext);

  return (
    <div
      css={{
        ...getBaseStyle(theme),
        height: (5 - level) * theme.baseFontSize,
        fontSize: `calc(${getBaseStyle(theme).fontSize} - ${
          level > 3 ? 3 : level
        }px)`,
        color: theme.colors[sideNavCtx.backgroundColor].foreground,
        ...(active && {
          backgroundColor: theme.colors[sideNavCtx.backgroundColor].dark,
          color: getForeground(theme.colors[sideNavCtx.backgroundColor].dark),
        }),
        stroke: theme.colors[sideNavCtx.backgroundColor].foreground,
        whiteSpace: "nowrap",
        padding: `${level > 2 ? 2 : 4 - level}px ${level *
          theme.baseFontSize}px`,
        "&:hover": {
          backgroundColor: theme.colors[sideNavCtx.hoverColor].base,
          color: theme.colors[sideNavCtx.hoverColor].foreground,
          stroke: theme.colors[sideNavCtx.hoverColor].foreground,
        },
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {text}
      {children}
      {caretDirection && (
        <CaretIcon
          css={{
            width: `${theme.baseFontSize - 2}px`,
            ...(caretDirection == "up" && {
              transform: "rotate(180deg)",
              transition: "transform .3s linear",
            }),
          }}
        />
      )}
    </div>
  );
};

Item.defaultProps = {
  visible: true,
  level: 1,
};

export const Divider = ({ color, empty, ...rest }) => {
  const theme = useContext(MollyThemeContext);
  const sideNavCtx = useContext(SideNavContext);

  return (
    <div
      css={{
        padding: `${theme.baseFontSize}px 0`,
      }}
    >
      <div
        css={{
          background: empty
            ? "none"
            : `linear-gradient(to right, ${
                theme.colors[sideNavCtx.backgroundColor].base
              }, ${theme.colors[color].base} 5% 95%, ${
                theme.colors[sideNavCtx.backgroundColor].base
              })`,
          height: "1px",
        }}
      ></div>
    </div>
  );
};

Divider.defaultProps = {
  color: COLORS.DARK_GREY,
};
