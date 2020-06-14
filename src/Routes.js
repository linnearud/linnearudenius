import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import BirdsPage from "./birds";
import StartPage from "./StartPage"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/birds" component={BirdsPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
