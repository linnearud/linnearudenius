import { useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import CaretIcon from "../../icons/CaretIcon";
import { Caption } from "../Typography";
import MollyThemeContext from "../../contexts/MollyThemeContext";
import { getBaseStyle, getFormStyle } from "../../helpers/styles";
import { COLORS } from "../../helpers/constants";

export const Select = ({
  label,
  placeholder,
  options,
  selected,
  onChange,
  disabled,
  ...rest
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useContext(MollyThemeContext);
  const formStyle = getFormStyle(theme);
  const node = useRef();

  const handleKeyPressed = (e) => {
    if (disabled) return;
    if (e.charCode === 32) {
      setMenuOpen(!menuOpen);
    } else if (menuOpen && e.charCode === 13 && e.target.value !== undefined) {
      onChange(e);
      setMenuOpen(false);
    }
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    } else if ( menuOpen ) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  })

  return (
    <div
      ref={node}
      css={{
        display: "flex",
        flexDirection: "column",
        margin: theme.componentMargin,
        ...getBaseStyle(theme),
      }}
    >
      <Caption color={COLORS.DARK_GREY}>{label}</Caption>
      <div
        css={{ position: "relative", height: theme.lineHeights.body.base + 15 }}
      >
        <ul
          css={{
            ...(disabled ? formStyle.disabled : formStyle.base),
            ...(menuOpen && theme.elevation.overlay),
            minHeight: theme.lineHeights.body.base,
            width: "100%",
            borderRadius: theme.borderRadius,
            margin: 0,
            listStyleType: "none",
            position: "absolute",
            top: 0,
            left: 0,
            padding: 0,
            "&:hover": {
              ...(!disabled && {
                cursor: "pointer",
                ...formStyle.hover,
              }),
            },
            "&:focus": {
              outline: "none",
              ...(!disabled && formStyle.focus),
            },
          }}
          tabIndex={disabled ? "-1" : "0"}
          onClick={() => !disabled && setMenuOpen(!menuOpen)}
          onKeyPress={handleKeyPressed}
        >
          <li
            css={{
              ...(!disabled &&
                !options[selected] && {
                  color: theme.colors[COLORS.DARK_GREY].base,
                }),
              display: "flex",
              alignItems: "center",
              padding: "5px",
              ...(menuOpen && {
                borderBottom: `1px solid ${
                  theme.colors[COLORS.LIGHT_GREY].base
                }`,
              }),
            }}
          >
            <div css={{ flexGrow: 1 }}>
              {options[selected] ? options[selected] : placeholder}
            </div>
            <CaretIcon
              css={{
                stroke: disabled
                  ? theme.colors[COLORS.DISABLED_GREY].base
                  : theme.colors[COLORS.DARK_GREY].base,
                height: theme.baseFontSize,
                width: theme.baseFontSize,
                ...(menuOpen && {
                  transform: "rotate(180deg)",
                  transition: "transform .3s linear",
                }),
                ...(!menuOpen && {
                  transform: "rotate(0deg)",
                  transition: "transform .3s linear",
                }),
              }}
            />
          </li>
          {!disabled && (
            <ul
              css={{
                listStyleType: "none",
                padding: 0,
                height: 0,
                ...(menuOpen && { height: "auto", padding: "5px" }),
                zIndex: 100,
                transition: ".2s ease-out",
                li: {
                  padding: "5px 0px",
                  "&:hover": {
                    backgroundColor: theme.colors[COLORS.LIGHT_GREY].base,
                    borderRadius: "3px",
                  },
                },
              }}
            >
              {menuOpen &&
                Object.keys(options).map((key) => {
                  return (
                    <li
                      role="button"
                      name={options[key]}
                      value={key}
                      key={key}
                      onClick={onChange}
                      tabIndex="0"
                      onKeyPress={handleKeyPressed}
                      css={{
                        "&:focus": {
                          outline: "none",
                          backgroundColor: theme.colors[COLORS.LIGHT_GREY].base,
                        },
                      }}
                    >
                      {options[key]}
                    </li>
                  );
                })}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.object.isRequired,
  selected: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Select;
