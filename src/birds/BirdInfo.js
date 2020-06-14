import { useEffect, useContext, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { birds } from "./birds";
import {
    MollyThemeContext,
    Typography,
    breakpoints,
    CaretIcon,
    constants,
} from "../molly-ui";

const BirdInfo = () => {
    const { birdId } = useParams();
    const theme = useContext(MollyThemeContext);
    const [imageIndex, setImageIndex] = useState(0);
    const [pictures, setPictures] = useState([]);

    const bird = birds
        .map((group) => group.birds)
        .flat()
        .find((bird) => bird.id === birdId);

    useEffect(() => {
        setImageIndex(0);
        const images = bird.images.map((imageSrc) => {
            const tmp = new Image();
            tmp.src = imageSrc;
            return tmp;
        });
        setPictures(images);
    }, [birdId, bird.images]);

    if (bird) {
        return (
            <div
                css={{
                    marginBottom: theme.baseFontSize * 4,
                    paddingTop: theme.baseFontSize,
                }}
            >
                <div
                    css={{
                        width: "400px",
                        maxWidth: "100%",
                        paddingLeft: theme.baseFontSize,
                        margin: "auto",
                        textAlign: "left",
                        ...breakpoints.tablet({
                            textAlign: "center",
                        }),
                    }}
                >
                    <Typography.H1
                        css={{ marginBottom: 0.5 * theme.baseFontSize }}
                    >
                        {bird.name_sv}
                    </Typography.H1>
                    <Typography.Body>({bird.name_latin})</Typography.Body>
                </div>
                <Typography.H4
                    css={{
                        textAlign: "left",
                        margin: theme.baseFontSize,
                        width: "400px",
                        maxWidth: "100%",
                        margin: `${theme.baseFontSize}px`,
                        ...breakpoints.tablet({
                            textAlign: "center",
                            margin: `${theme.baseFontSize}px auto`,
                        }),
                    }}
                >
                    Kännetecken
                </Typography.H4>
                <ul
                    css={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        maxWidth: "100%",
                        paddingLeft: 2 * theme.baseFontSize,
                        margin: `${theme.baseFontSize}px 0`,
                        ...breakpoints.tablet({
                            width: 400,
                            margin: `${theme.baseFontSize}px auto`,
                        }),
                    }}
                >
                    {bird.characteristics.map((ch, i) => (
                        <Typography.Body component="li" key={i}>
                            {ch}
                        </Typography.Body>
                    ))}
                </ul>
                <Typography.H4
                    css={{
                        textAlign: "left",
                        margin: theme.baseFontSize,
                        width: "400px",
                        maxWidth: "100%",
                        margin: `${theme.baseFontSize}px`,
                        ...breakpoints.tablet({
                            textAlign: "center",
                            margin: `${theme.baseFontSize}px auto`,
                        }),
                    }}
                >
                    Bilder
                </Typography.H4>
                <div
                    css={{
                        position: "relative",
                        maxWidth: "100%",
                        width: "fit-content",
                        margin: "auto",
                    }}
                >
                    <div
                        css={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: `0 ${theme.baseFontSize}px ${theme.baseFontSize}px`,
                            stroke: theme.colors[constants.COLORS.BLACK].base,
                        }}
                    >
                        <div
                            css={{
                                width: "50px",
                                display: "flex",
                                alignItems: "center",
                            }}
                            onClick={() => setImageIndex(imageIndex - 1)}
                        >
                            {imageIndex !== 0 && (
                                <CaretIcon
                                    css={{
                                        width: theme.baseFontSize,
                                        transform: "rotate(90deg)",
                                        cursor: "pointer",
                                    }}
                                />
                            )}
                        </div>
                        <div css={{ display: "flex", alignItems: "center" }}>
                            {pictures.map((_, index) => (
                                <Typography.Body
                                    onClick={() => setImageIndex(index)}
                                    key={index}
                                    css={{
                                        padding: `0 ${theme.baseFontSize}px`,
                                        ...(index === imageIndex && {
                                            color:
                                                theme.colors[
                                                    constants.COLORS.PRIMARY
                                                ].base,
                                        }),
                                        cursor: "pointer",
                                    }}
                                >
                                    {index + 1}
                                </Typography.Body>
                            ))}
                        </div>
                        <div
                            css={{
                                width: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                            onClick={() => setImageIndex(imageIndex + 1)}
                        >
                            {imageIndex !== pictures.length - 1 && (
                                <CaretIcon
                                    css={{
                                        width: theme.baseFontSize,
                                        transform: "rotate(270deg)",
                                        cursor: "pointer",
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div
                        css={{
                            display: "flex",
                        }}
                    >
                        {pictures.map((pic, index) => (
                            <div
                                css={{
                                    width: imageIndex === index ? "400px" : 0,
                                    transition: "width 0.5s",
                                    margin: 0,
                                }}
                            >
                                <img
                                    src={pictures[index].src}
                                    alt={bird.name_latin}
                                    css={{
                                        maxWidth: "100%",
                                        width: "400px",
                                        height: "100%",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return <Redirect to="/birds" />;
    }
};

export default BirdInfo;
