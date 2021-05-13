import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Pokemon from './components/pokemon';
import Hello from './components/menu';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pokemon} />
                <Route path="/pokemons" component={Hello} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;