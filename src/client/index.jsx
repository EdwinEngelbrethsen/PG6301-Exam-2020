import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Home} from "./home";
import {ListOfCharacters} from "./listOfCharacters";
import {Game} from "./game";

/*https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/client/index.jsx*/

const notFound = () => {
    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>
                OI JOSUKE I USED ZA HANDO TO REMOVE THE PAGE YOU WERE LOOKING FOR, AIN'T THAT COOL
            </p>
        </div>
    )
};

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/game" component={Game}/>
                    <Route exact path="/listOfCharacters" component={ListOfCharacters} />
                    <Route exact path="/" component={Home}/>
                    <Route component={notFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )

};

ReactDOM.render(<App/>, document.getElementById("root"));