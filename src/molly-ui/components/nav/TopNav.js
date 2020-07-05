import { useContext, createContext, useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Portal } from "react-portal";

import MollyThemeContext from "../../contexts/MollyThemeContext";
import { TYPES, COLORS, BREAKPOINTS } from "../../helpers/constants";
import { tablet, desktop } from "../../helpers/breakpoints";
import { getForeground } from "../../helpers/colors";
import { getBaseStyle } from "../../helpers/styles";
import CloseIcon from "../../icons/CloseIcon";

const TopNavContext = createContext({
  hoverColor: COLORS.PRIMARY,
  backgroundColor: COLORS.LIGHT_GREY,
  setIsMenuOpen: null,
});

export const Container = ({
  children,
  position,
  color,
  hoverColor,
  onClose,
  persist,
  visible,
  menuText,
  ...rest
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useContext(MollyThemeContext);

  useEffect(() => {
      if (document.body.clientWidth < BREAKPOINTS.TABLET) {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
      }
  }, [isMenuOpen])

  return (
    <div>
      <Portal>
        <div
          css={{
            position: "fixed",
            top: 4 * theme.baseFontSize,
            height: "100vh",
            width: "100vw",
            backgroundColor: theme.colors[color].base,
            color: theme.colors[color].foreground,
            boxShadow: "0 3px 10px rgba(0,0,0,0.20)",
            ...(!isMenuOpen && { height: 0 }),
            transition: "height 0.2s",
            ...tablet({
              display: "none",
            }),
          }}
        >
          <div
            css={{
              ...(!isMenuOpen && { display: "none" }),
            }}
          >
            <TopNavContext.Provider
              value={{
                hoverColor: hoverColor,
                backgroundColor: color,
                setIsMenuOpen: setIsMenuOpen,
              }}
            >
              {children}
            </TopNavContext.Provider>
          </div>
        </div>
      </Portal>

      <div
        css={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: 4 * theme.baseFontSize,
          backgroundColor: theme.colors[color].base,
          color: theme.colors[color].foreground,
          boxShadow: "0 3px 10px rgba(0,0,0,0.60)",
          display: "flex",
          justifyContent: "flex-end",
          ...tablet({
            justifyContent: "flex-start",
          }),
        }}
      >
        <TopNavContext.Provider
          value={{
            hoverColor: hoverColor,
            backgroundColor: color,
            setIsMenuOpen: setIsMenuOpen,
          }}
        >
          <div
            css={{
              ...tablet({
                display: "none",
              }),
            }}
          >
            <Item onClick={() => setIsMenuOpen(!isMenuOpen)} removePadding>
              {isMenuOpen ? (
                <CloseIcon
                  css={{
                    width: "12px",
                  }}
                  onClick={onClose}
                />
              ) : (
                menuText || "Menu"
              )}
            </Item>
          </div>
          <div
            css={{
              display: "none",
              ...tablet({
                display: "flex",
              }),
            }}
          >
            {children}
          </div>
        </TopNavContext.Provider>
      </div>
    </div>
  );
};

Container.defaultProps = {
  color: COLORS.LIGHT_GREY,
  hoverColor: COLORS.PRIMARY,
};

export const Item = ({
  text,
  children,
  onClick,
  removePadding,
  active,
  ...rest
}) => {
  const theme = useContext(MollyThemeContext);
  const topNavCtx = useContext(TopNavContext);

  const handleClick = () => {
    if (topNavCtx.setIsMenuOpen) {
      topNavCtx.setIsMenuOpen(false);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      css={{
        ...getBaseStyle(theme),
        padding: removePadding
          ? `0 ${2 * theme.baseFontSize}px`
          : 2 * theme.baseFontSize,
        color: theme.colors[topNavCtx.backgroundColor].foreground,
        ...(active && {
          backgroundColor: theme.colors[topNavCtx.backgroundColor].dark,
          color: getForeground(theme.colors[topNavCtx.backgroundColor].dark),
        }),
        height: "100%",
        alignItems: "center",
        display: "flex",
        cursor: "pointer",
        stroke: theme.colors[topNavCtx.backgroundColor].foreground,
        "&:hover": {
          backgroundColor: theme.colors[topNavCtx.hoverColor].base,
          color: theme.colors[topNavCtx.hoverColor].foreground,
          stroke: theme.colors[topNavCtx.hoverColor].foreground,
        },
        "&:active": {
          backgroundColor: theme.colors[topNavCtx.hoverColor].dark,
        },
        ...tablet({
          width: "fit-content",
          padding: `0 ${2 * theme.baseFontSize}px`,
        }),
      }}
      onClick={handleClick}
      {...rest}
    >
      {text}
      {children}
    </div>
  );
};
