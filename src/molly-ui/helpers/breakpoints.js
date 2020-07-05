/** @jsx jsx */
import { jsx } from "@emotion/core";
import { BREAKPOINTS } from "./constants";

export const tablet = (styles) => ({
    [`@media (min-width: ${BREAKPOINTS.TABLET}px)`]: {
        ...styles,
    },
});

export const desktop = (styles) => ({
    [`@media (min-width: ${BREAKPOINTS.DESKTOP}px)`]: {
        ...styles,
    },
});
