import { useState } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as pages from "./pages";
import { SearchIndexProvider } from "./search/SearchIndexContext";
import { BirdDataProvider } from "./data/BirdDataContext";

import {
    Route,
    useHistory,
    Switch,
    useLocation,
    Redirect,
} from "react-router-dom";
import { MollyThemeProvider, breakpoints, constants, Tabs } from "../molly-ui";

const birdTheme2 = {
    colors: {
        primary: "#67ab83",
        secondary: "#214E34",
        tertiary: "#214E34",
        black: "#0e1711",
        darkGrey: "#aba9a9",
        disabledGrey: "#cfcccc",
        lightGrey: "#E6E6E6",
        white: "#FFFFFF",
        success: "#5CAB7D",
        failure: "#C3423F",
    },
    fontFamily: "Noto Sans HK",
    baseFontSize: 16,
    typeScale: 1.25,
    lineHeightRatio: 1.5,
    headingLineHeightRatio: 1.25,
    borderRadius: "3px",
    componentMargin: "10px",
};

const Birds = () => {
    const history = useHistory();
    const location = useLocation();

    const navigateToPage = (page) => {
        history.push(page);
    };

    return (
        <MollyThemeProvider theme={birdTheme2}>
            <BirdDataProvider>
                <SearchIndexProvider>
                    <div
                        css={{
                            width: "100vw",
                            minHeight: "100vh",
                            margin: "auto",
                            background: "#eeeeee",
                            ...breakpoints.desktop({
                                padding: "20px 0",
                            }),
                        }}
                    >
                        <div
                            css={{
                                width: "100vw",
                                minHeight: "calc(100vh - 64px)",
                                background: "#ffffff",
                                maxWidth: "1150px",
                                margin: "auto",
                                ...breakpoints.desktop({
                                    border: "1px solid #dae8dd",
                                    boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
                                }),
                            }}
                        >
                            <div>
                                <div
                                    css={{
                                        background: `url(${require("../images/forest.jpg")})`,
                                    }}
                                >
                                    <Tabs.Container
                                        activeBackgroundColor={
                                            constants.COLORS.WHITE
                                        }
                                        activeColor={constants.COLORS.BLACK}
                                        color={constants.COLORS.WHITE}
                                        backgroundColor={"rgba(0,0,0,0.5)"}
                                    >
                                        <Tabs.Item
                                            active={
                                                location.pathname === "/birds"
                                            }
                                            text="Bläddra"
                                            onClick={() =>
                                                navigateToPage("/birds")
                                            }
                                        />
                                        <Tabs.Item
                                            active={
                                                location.pathname ===
                                                "/birds/search"
                                            }
                                            text="Sök"
                                            onClick={() =>
                                                navigateToPage("/birds/search")
                                            }
                                        />
                                        <Tabs.Item
                                            active={
                                                location.pathname ===
                                                "/birds/compare"
                                            }
                                            onClick={() =>
                                                navigateToPage("/birds/compare")
                                            }
                                            text="Jämför"
                                        />
                                        <Tabs.Item
                                            active={
                                                location.pathname ===
                                                "/birds/quiz"
                                            }
                                            onClick={() =>
                                                navigateToPage("/birds/quiz")
                                            }
                                            text="Quiz"
                                        />
                                    </Tabs.Container>
                                </div>
                                <Switch>
                                    <Redirect
                                        from="/:url*(/+)"
                                        to={location.pathname.slice(0, -1)}
                                    />
                                    <Route
                                        path="/birds/"
                                        exact
                                        component={pages.BrowsePage}
                                    />
                                    <Route
                                        path="/birds/search"
                                        exact
                                        component={pages.SearchPage}
                                    />
                                    <Route
                                        path="/birds/compare"
                                        exact
                                        component={pages.ComparePage}
                                    />
                                    <Route
                                        path="/birds/quiz"
                                        exact
                                        component={pages.QuizPage}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </SearchIndexProvider>
            </BirdDataProvider>
        </MollyThemeProvider>
    );
};

export default Birds;
