import { useContext } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { backendServiceHost } from "../api"

import {
    MollyThemeContext,
    breakpoints,
    CaretIcon,
    CloseIcon,
    ImageLoader,
} from "../../molly-ui";

const BirdListing = ({
    name_sv,
    name_latin,
    image_path,
    children,
    onClick,
    onClose,
    caretDirection,
    fontStyles,
    hasBorder,
    leftPadding = 0,
    inline,
    ...rest
}) => {
    const theme = useContext(MollyThemeContext);
    return (
        <div
            css={{
                padding: theme.baseFontSize / 4,
                borderBottom: hasBorder && "1px solid rgba(0,0,0,0.20)",
                background: theme.colors.white.base,
                textAlign: "left",
                cursor: onClick && "pointer",
                "&:hover": {
                    borderBottom:
                        onClick && hasBorder && "2px solid rgba(0,0,0,0.40)",
                },
            }}
            {...rest}
        >
            <div
                onClick={onClick}
                css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: `${theme.baseFontSize / 2}px ${theme.baseFontSize /
                        2}px ${theme.baseFontSize / 2}px ${leftPadding}px`,
                }}
            >
                {image_path && (
                    <ImageLoader
                        styles={{
                            width: 70,
                            height: 40,
                            objectFit: "contain",
                            marginRight: theme.baseFontSize,
                            ...breakpoints.tablet({
                                width: 150,
                                height: 90,
                                display: "initial",
                            }),
                        }}
                        src={backendServiceHost + image_path}
                    />
                )}
                <div
                    css={{
                        flexGrow: 1,
                        ...fontStyles,
                        ...breakpoints.tablet({
                            display: "flex",
                            flexDirection: !inline && "column",
                            alignItems: inline ? "baseline" : "flex-start",
                        }),
                    }}
                >
                    <span
                        css={{
                            ...breakpoints.tablet({
                                fontSize: theme.baseFontSize * 1.3,
                            }),
                        }}
                    >
                        {name_sv}{" "}
                    </span>
                    <span
                        css={{
                            ...breakpoints.tablet({
                                display: !inline && "none",
                                marginLeft: theme.baseFontSize / 2,
                            }),
                        }}
                    >
                        {name_sv !== name_latin && `(${name_latin})`}
                    </span>
                    <div
                        css={{
                            display: "none",
                            ...breakpoints.tablet({
                                display: !inline && "initial",
                                marginTop: theme.baseFontSize / 2,
                                fontStyle: "italic",
                            }),
                        }}
                    >
                        {name_latin}
                    </div>
                </div>
                {onClose && (
                    <CloseIcon
                        css={{
                            cursor: "pointer",
                            width: "10px",
                            paddingLeft: 10,
                            paddingRight: 10,
                            stroke: theme.colors.black.base,
                        }}
                        onClick={onClose}
                    />
                )}
                {caretDirection && (
                    <CaretIcon
                        css={{
                            width: "18px",
                            transform:
                                caretDirection === "up" && "rotate(180deg)",
                            transition: "transform 0.2s linear",
                            stroke: theme.colors.black.base,
                        }}
                    />
                )}
            </div>
            {children}
        </div>
    );
};

export default BirdListing;
