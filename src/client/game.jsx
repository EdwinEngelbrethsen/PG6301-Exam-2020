import React from "react";
import {Link} from "react-router-dom";

export class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            game: null,
            error: null,
            clicker: 0,
            counter: 0,
            show: false,
            isDisabled: true
        };
        this.clickCounterOnce = this.clickCounterOnce.bind(this);
        this.counterClicker = this.counterClicker.bind(this);
    }

    componentDidMount() {
        this.startNewGame();
    }


    /* function gotten from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/client/match.jsx*/
    startNewGame = async () => {

        const jojo = await this.getRandomCharacter(7);

        this.setState(
            !jojo
            ? { error: "Error when connecting to server" }
            : {
                error: null,
                game: {
                    jojo: jojo,
                    character: jojo.characterName,
                    standName: jojo.standName,
                    numberOfCharacters: jojo.length,
                }
                }
        );
    };

    /* function gotten from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-07/src/client/match.jsx*/
    getRandomCharacter = async (numberOfCharacters) => {
        if (numberOfCharacters < 1) {
            throw "Invalid number of requested quizzes " + n;
        }

        const url = "/api/jojo";
        let response;
        let payload;

        try {
            response = await fetch(url, {method: "post"});
            payload = await response.json();
        } catch (err) {
            return null;
        }


        if (response.status !== 201) {
            return null;
        }

        console.log(payload);

        return payload;
    };

    /* Cookie Clicker functions gotten from https://codepen.io/NiviJah/pen/PpaZjZ */
    clickCounterOnce() {
        this.setState({
            counter: this.state.counter + 1
        });
        if (this.state.counter >= 10) {
            this.setState({
                isDisabled: false
            });
        }

    }

    counterClicker(){
        this.setState({
            clicker: this.state.clicker + 1,
            counter: this.state.counter - 10
        });
        if (this.state.clicker <= 10) {
            this.setState({
                isDisabled: true
            });
        }
        if (this.state.counter > 1) {
            this.setState({
                show : true
            })
        }

    };

    /* this function was inspired by https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components */
    renderRandomJojo() {
        if(this.state.show === false) {
            return null
        }

        if(this.state.show === true) {
            return <div>
                <p>You got:</p>
                <p>{this.state.game.jojo[1].characterName}</p>
                <p>{this.state.game.jojo[1].standName}</p>

                <p>{this.state.game.jojo[2].characterName}</p>
                <p>{this.state.game.jojo[2].standName}</p>

                <p>{this.state.game.jojo[3].characterName}</p>
                <p>{this.state.game.jojo[3].standName}</p>
            </div>
        }
    }

    render() {

        if (this.state.error) {
            return <h2>{this.state.error}</h2>;
        }

        if (!this.state.game) {
            return <h2>Loading....</h2>
        }


        return (

          <div>
              <div className="play-btn">
                  <Link to={"/"} className={"play"}>
                      Home
                  </Link>
              </div>


              <h2>Welcome to the JOJO inspired Gacha game</h2>
              <p>You start will start off the game with these characters</p>
              <p>Character: {this.state.game.jojo[0].characterName}</p>
              <p>Stand: {this.state.game.jojo[0].standName}</p>
              <button className="play-btn" onClick={this.clickCounterOnce}>Click me ({this.state.counter})</button>
              <button className="play-btn" disabled={this.state.isDisabled} onClick={this.counterClicker}>Buy 3 more characters</button>

              {this.renderRandomJojo()}
          </div>



        );
    }
}
