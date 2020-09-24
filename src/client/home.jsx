import React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    /* Code mostly inspired from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-06/src/client/home.jsx*/
    render() {
        return (
            <div>
                <h2>Jojo's Bizarre Adventure Gacha Game</h2>

                <p className="Welcome-text">
                    Welcome to the Jojo's Bizarre Adventure inspired gacha game!
                    The theme of this game is JJBA parts 1 - 8 and the gameplay mechanics are heavily inspired by another game called cookie clicker.
                    You click on the Button until you have enough points to roll for 3 more characters.
                </p>

                <div className="play-btn">
                    <Link to={"/game"} className={"play"}>
                        Click here to play the game
                    </Link>
                </div>

                <div className="play-btn">
                    <Link to={"/listOfCharacters"} className={"play"}>
                        Click here to see all stands
                    </Link>
                </div>
            </div>
        )
    }
}