import { useState, Fragment } from "react";
import { TopNav, SideNav } from "../molly-ui";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { birds } from "./birds";
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
                    <Route path="/birds/:birdId" component={BirdInfo} />
                </Switch>
            </div>
        </MollyThemeProvider>
    );
};

export default BirdsPage;

const Navigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [groupOpen, setGroupOpen] = useState(birds.map((_) => false));
    const history = useHistory();

    const toggleGroup = (index) => {
        const openGroups = groupOpen.slice();
        openGroups[index] = !openGroups[index];
        setGroupOpen(openGroups);
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
                {birds.map((group, i) => {
                    return (
                        <Fragment key={group.group}>
                            <SideNav.Item
                                text={group.group}
                                onClick={() => toggleGroup(i)}
                                caretDirection={groupOpen[i] ? "up" : "down"}
                            />
                            {groupOpen[i] &&
                                group.birds.map((bird) => (
                                    <SideNav.Item
                                        level={2}
                                        text={bird.name_sv}
                                        key={bird.id}
                                        onClick={() =>
                                            navigateToPage(`/birds/${bird.id}`)
                                        }
                                    />
                                ))}
                        </Fragment>
                    );
                })}
            </SideNav.Container>
        </Fragment>
    );
};
