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
                    margin: `0 auto ${theme.baseFontSize * 4}px auto`,
                    paddingTop: theme.baseFontSize,
                    maxWidth: "400px",
                    textAlign: "left",
                    ...breakpoints.tablet({
                        textAlign: "center",
                    }),
                }}
            >
                <div css={{ paddingLeft: theme.baseFontSize }}>
                    <Typography.H1
                        css={{ marginBottom: 0.5 * theme.baseFontSize }}
                    >
                        {bird.name_sv}
                    </Typography.H1>
                    <Typography.Body>({bird.name_latin})</Typography.Body>

                    <Typography.H4>Kännetecken</Typography.H4>
                    <ul
                        css={{
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft: theme.baseFontSize,
                            textAlign: "left",
                        }}
                    >
                        {bird.characteristics.map((ch, i) => (
                            <Typography.Body component="li" key={i}>
                                {ch}
                            </Typography.Body>
                        ))}
                    </ul>
                    <Typography.H4>Bilder</Typography.H4>
                </div>
                <div>
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
                            onClick={() =>
                                imageIndex != 0 && setImageIndex(imageIndex - 1)
                            }
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
                            onClick={() =>
                                imageIndex != pictures.length - 1 &&
                                setImageIndex(imageIndex + 1)
                            }
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
                                    key={index}
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
