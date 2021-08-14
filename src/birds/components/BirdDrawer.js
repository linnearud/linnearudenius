import { useContext, useEffect, useState } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as api from "../api";
import { backendServiceHost } from "../api";

import {
    MollyThemeContext,
    breakpoints,
    Typography,
    CloseIcon,
} from "../../molly-ui";

const BirdDrawer = ({ bird, onClose }) => {
    const theme = useContext(MollyThemeContext);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (!bird.id) return;
        async function fetchImages() {
            const { data: tmp } = await api.get(`/birds/${bird.id}`);
            setImages(tmp.images);
        }
        fetchImages();
    }, [bird]);

    return (
        <div
            css={{
                position: "fixed",
                zIndex: 1000,
                top: 0,
                left: 0,
                width: Object.keys(bird).length === 0 ? 0 : "calc(100% - 8px)",
                maxWidth: 800,
                overflow: "hidden",
                transition: "all .3s linear",
                boxShadow: "0 1px 5px rgba(0,0,0,0.60)",
            }}
        >
            <div
                css={{
                    overflowX: "hidden",
                    overflowY: "scroll",
                    wordBreak: "keep-all",
                    borderRadius: theme.borderRadius,
                    backgroundColor: theme.colors.white.base,
                    height: "100vh",
                    boxShadow: "1px 0px 4px 0 rgba(0,0,0,0.20)",
                }}
            >
                {Object.keys(bird).length > 0 && (
                    <div css={{ textAlign: "left", padding: 16 }}>
                        <Typography.Caption
                            css={{
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "flex-end",
                                cursor: "pointer",
                            }}
                            onClick={onClose}
                        >
                            Stäng
                            <CloseIcon
                                css={{
                                    width: "10px",
                                    stroke: theme.colors.black.base,
                                    marginLeft: theme.baseFontSize / 2,
                                }}
                            />
                        </Typography.Caption>
                        <Typography.H4 css={{ margin: 0 }}>
                            {bird.name_sv}
                        </Typography.H4>
                        <Typography.Body
                            css={{ marginTop: theme.baseFontSize }}
                        >
                            {" "}
                            {bird.name_latin} (latin)
                        </Typography.Body>
                        <Typography.Body
                            css={{ marginTop: theme.baseFontSize / 4 }}
                        >
                            {" "}
                            {bird.name_en} (en)
                        </Typography.Body>

                        <Typography.Body
                            css={{ marginTop: theme.baseFontSize }}
                        >
                            <span css={{ fontWeight: 700 }}>
                                Kännetecken (från fågeln.se):{" "}
                            </span>
                            {bird.characteristics}
                        </Typography.Body>
                        <Typography.Body
                            css={{ marginTop: theme.baseFontSize }}
                        >
                            <span css={{ fontWeight: 700 }}>
                                Finnes (från fågeln.se):{" "}
                            </span>
                            {bird.spread}
                        </Typography.Body>
                        <Typography.Body
                            css={{ marginTop: theme.baseFontSize }}
                        >
                            <a
                                href={bird.link_fageln}
                                target="_blank"
                                css={{ color: theme.colors.black.base }}
                            >
                                Länk till fågeln.se
                            </a>
                        </Typography.Body>
                        {bird.hunt !== "" && (
                            <Typography.Body
                                css={{ marginTop: theme.baseFontSize }}
                            >
                                <a
                                    href={bird.hunt}
                                    target="_blank"
                                    css={{ color: theme.colors.black.base }}
                                >
                                    Länk till jakttider
                                </a>
                            </Typography.Body>
                        )}
                        <div
                            css={{
                                marginTop: theme.baseFontSize,
                                ...breakpoints.tablet({
                                    display: "flex",
                                    flexWrap: "wrap",
                                }),
                            }}
                        >
                            {images.map((image) => {
                                return (
                                    <img
                                        src={backendServiceHost + image.path}
                                        key={image.path}
                                        alt={bird.name_latin}
                                        css={{
                                            width: "calc(100% - 32px)",
                                            maxWidth: 320,
                                            objectFit: "contain",
                                            margin: theme.baseFontSize,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BirdDrawer;
