import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

export const SearchIndexContext = React.createContext(null);

export const SearchIndexProvider = ({ index, children }) => {
    return (
        <SearchIndexContext.Provider value={index}>
            {children}
        </SearchIndexContext.Provider>
    );
};

export default SearchIndexContext;
