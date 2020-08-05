import { useContext, createContext } from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";

import MollyThemeContext from "../../contexts/MollyThemeContext";
import { getBaseStyle } from "../../helpers/styles";
import { TYPES, COLORS, BREAKPOINTS } from "../../helpers/constants";

const TabsContext = createContext({
  color: COLORS.BLACK,
  activeColor: COLORS.PRIMARY,
  backgroundColor: null,
  activeBackgroundColor: null,
});

export const Container = ({
  children,
  color,
  activeColor,
  backgroundColor,
  activeBackgroundColor,
}) => {
  const theme = useContext(MollyThemeContext);
  return (
    <TabsContext.Provider
      value={{
        color: color || COLORS.BLACK,
        activeColor: activeColor || COLORS.PRIMARY,
        backgroundColor: backgroundColor,
        activeBackgroundColor: activeBackgroundColor,
      }}
    >
      <div
        css={{
          ...getBaseStyle(theme),
          display: "flex",
        }}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const Item = ({ active, text, onClick }) => {
  const theme = useContext(MollyThemeContext);
  const tabsCtx = useContext(TabsContext);
  return (
    <div
      onClick={onClick}
      css={{
        fontSize: theme.baseFontSize * 1,
        fontWeight: 500,
        padding: theme.baseFontSize,
        cursor: "pointer",
        color: theme.colors[active ? tabsCtx.activeColor : tabsCtx.color].base,
        backgroundColor: active ? tabsCtx.activeBackgroundColor : tabsCtx.backgroundColor,
        boxShadow: active && "2px 0px 2px rgba(0,0,0,0.2)",
        "&:hover": {
          color: theme.colors[tabsCtx.activeColor].base,
          backgroundColor: theme.colors[tabsCtx.activeBackgroundColor].base,
          boxShadow: "2px 0px 2px rgba(0,0,0,0.2)",
        },
      }}
    >
      <div
        css={{
          borderBottom:
            active && `1px solid ${theme.colors[tabsCtx.activeColor].base}`,
          paddingBottom: theme.baseFontSize / 4,
        }}
      >
        {text}
      </div>
    </div>
  );
};
