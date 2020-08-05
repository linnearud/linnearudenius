import React, { useState, useEffect, useContext } from "react";
/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";
import MollyThemeContext from "../contexts/MollyThemeContext";
import { COLORS } from "../helpers/constants";

const animation = keyframes`
    0%{
        background-position: 200px 0
    }
    100%{
        background-position: -200px 0
    }
`;

export const ImageLoader = React.memo(({ src, styles, placeholderWidth, placeholderHeight }) => {
    const theme = useContext(MollyThemeContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        let tmp = new Image();
        tmp.onload = () => {
            setIsLoading(false);
        };
        tmp.src = src;
    }, [src]);

    if (isLoading) {
        return (
            <div
                css={{
                    ...styles,
                    animationFillMode: "forwards",
                    animation: `${animation} 1.5s linear infinite`,
                    background: theme.colors[COLORS.DARK_GREY].base,
                    background: `linear-gradient(to left, ${
                        theme.colors[COLORS.LIGHT_GREY].base
                    } 10%, ${theme.colors[COLORS.WHITE].base} 25%, ${
                        theme.colors[COLORS.LIGHT_GREY].base
                    } 63%)`,
                    backgroundSize: "400px 104px",
                    position: "relative",
                }}
            >
                {" "}
            </div>
        );
    } else {
        return <img src={src} css={styles} />;
    }
});
