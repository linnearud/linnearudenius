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
                background: 'url("../birds.jpg") no-repeat center center fixed',
                height: "100%",
                width: "100%",
                backgroundSize: "250% 100%",
                "-webkit-background-size": "250% 100%",
                "-moz-background-size": "250% 100%",
                "-o-background-size": "250% 100%",
                ...breakpoints.tablet({
                    backgroundSize: "200% 100%",
                    "-webkit-background-size": "200% 100%",
                    "-moz-background-size": "200% 100%",
                    "-o-background-size": "200% 100%",
                }),
                ...breakpoints.desktop({
                    backgroundSize: "cover",
                    "-webkit-background-size": "cover",
                    "-moz-background-size": "cover",
                    "-o-background-size": "cover",
                }),
            }}
        ></div>
    );
};

export default StartPage;
