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
                <Typography.H1 css={{ marginBottom: 0 }}>
                    {bird.name_sv}
                </Typography.H1>
                <Typography.Body css={{ fontStyle: "italic" }}>
                    ({bird.name_latin})
                </Typography.Body>
                <Typography.H3
                    css={{
                        textAlign: "left",
                        margin: theme.baseFontSize,
                        width: "400px",
                        ...breakpoints.tablet({
                            textAlign: "center",
                            margin: `${theme.baseFontSize}px auto`,
                        }),
                    }}
                >
                    Kännetecken
                </Typography.H3>
                <ul
                    css={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        paddingLeft: 2 * theme.baseFontSize,
                        width: 400 - 3 * theme.baseFontSize,
                        margin: theme.baseFontSize,
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
                <Typography.H3
                    css={{
                        textAlign: "left",
                        margin: theme.baseFontSize,
                        width: "400px",
                        ...breakpoints.tablet({
                            textAlign: "center",
                            margin: `${theme.baseFontSize}px auto`,
                        }),
                    }}
                >
                    Bilder
                </Typography.H3>
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
                        <div onClick={() => setImageIndex(imageIndex - 1)}>
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
                        <div onClick={() => setImageIndex(imageIndex + 1)}>
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
