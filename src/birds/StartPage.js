import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { birds } from "./birds";
import { MollyThemeContext, breakpoints, constants } from "../molly-ui";

const StartPage = () => {
    const theme = useContext(MollyThemeContext);

    const images = birds
        .reduce((res, item) => {
            const im = item.birds.map((bird) => bird.images).flat();
            res = res.concat(im);
            return res;
        }, [])
        .sort(() => 0.5 - Math.random())
        .slice(0, 25);

    return (
        <div
            css={{
                backgroundColor: theme.colors[constants.COLORS.PRIMARY].base,
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            {images.map((image, i) => (
                <div
                    key={i}
                    css={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "100% auto",
                        height: "15%",
                        width: "50%",
                        ...breakpoints.tablet({
                            height: "15%",
                            width: "25%",
                        }),
                        ...breakpoints.desktop({
                            height: "20%",
                            width: "20%",
                        }),
                    }}
                ></div>
            ))}
        </div>
    );
};

export default StartPage;
