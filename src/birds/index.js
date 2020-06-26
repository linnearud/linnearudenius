import { useState, Fragment } from "react";
import { TopNav, SideNav } from "../molly-ui";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { getGroups, getBirdsFromGroup } from "./data/helpers"
import BirdInfo from "./BirdInfo";
import BirdQuiz from "./quiz";
import StartPage from "./StartPage.js";
import { Route, useHistory, Switch } from "react-router-dom";
import { MollyThemeProvider } from "../molly-ui";

const birdTheme = {
    colors: {
        primary: "#214E34",
        secondary: "#214E34",
        tertiary: "#214E34",
        black: "#0e1711",
        darkGrey: "#aba9a9",
        disabledGrey: "#cfcccc",
        lightGrey: "#E6E6E6",
        white: "#f5fcf5",
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

const BirdsPage = () => {
    return (
        <MollyThemeProvider theme={birdTheme}>
            <Navigation />
            <div css={{ width: '100vw', height: "100vh"}}>
                <Switch>
                    <Route path="/birds/" exact component={StartPage} />
                    <Route path="/birds/quiz" component={BirdQuiz} />
                    <Route path="/birds/:slug" component={BirdInfo} />
                </Switch>
            </div>
        </MollyThemeProvider>
    );
};

export default BirdsPage;

const Navigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [openGroupId, setOpenGroupId] = useState(null)
    const history = useHistory();

    const toggleGroup = (id) => {
        if (openGroupId === id) {
            setOpenGroupId(null)
        } else {
            setOpenGroupId(id)
        }
    };

    const navigateToPage = (page) => {
        setMenuVisible(false);
        history.push(page);
    };

    return (
        <Fragment>
            <TopNav.Container menuText={"Meny"}>
                <TopNav.Item
                    onClick={() => navigateToPage("/birds/")}
                    text="Hem"
                />
                <TopNav.Item
                    onClick={() => setMenuVisible(!menuVisible)}
                    text="Fåglar"
                />
                <TopNav.Item
                    onClick={() => navigateToPage("/birds/quiz")}
                    text="Quiz"
                />
            </TopNav.Container>
            <SideNav.Container
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
                hasTopNav
            >
                {getGroups().map(group => (
                    <Fragment key={group.id}>
                        <SideNav.Item
                            text={group.name_sv}
                            onClick={() => toggleGroup(group.id)}
                            caretDirection={openGroupId === group.id ? "up" : "down"}
                        />
                        {openGroupId === group.id &&
                            getBirdsFromGroup(group.id).map(bird => (
                                <SideNav.Item
                                    level={2}
                                    text={bird.name_sv}
                                    key={bird.id}
                                    onClick={() => navigateToPage(`/birds/${bird.slug}`)}
                                />
                            ))

                        }
                    </Fragment>
                ))

                }
            </SideNav.Container>
        </Fragment>
    );
};
