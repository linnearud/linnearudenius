import { useEffect, useContext, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { getBirdFromSlug } from "./data/helpers";
import {
    MollyThemeContext,
    Typography,
    breakpoints,
    CaretIcon,
    constants,
} from "../molly-ui";

const BirdInfo = () => {
    const { slug } = useParams();
    const theme = useContext(MollyThemeContext);
    const [imageIndex, setImageIndex] = useState(0);
    const [pictures, setPictures] = useState([]);

    const bird = getBirdFromSlug(slug);

    useEffect(() => {
        setImageIndex(0);

        const removeImage = (src) => {
            setPictures(
                pictures.map((pic) => {
                    if (pic.src !== src) {
                        return pic;
                    }
                })
            );
        };

        const images = bird.images.map((imageSrc) => {
            const tmp = new Image();
            tmp.src = imageSrc;
            return tmp;
        });
        setPictures(images);
    }, [bird.images]);

    if (bird) {
        return (
            <div
                css={{
                    margin: `0 auto ${theme.baseFontSize * 4}px auto`,
                    paddingTop: 3 * theme.baseFontSize,
                    maxWidth: "400px",
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
                </div>
                <div css={{ marginTop: theme.baseFontSize }}>
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
                                key={index}
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
                    <div
                        css={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: `${theme.baseFontSize}px ${theme.baseFontSize}px 0`,
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
                </div>
                <div css={{paddingLeft: theme.baseFontSize}}>
                <Typography.H4 css={{margin: theme.baseFontSize}}>Kännetecken</Typography.H4>
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
                </div>
            </div>
        );
    } else {
        return <Redirect to="/birds" />;
    }
};

export default BirdInfo;
