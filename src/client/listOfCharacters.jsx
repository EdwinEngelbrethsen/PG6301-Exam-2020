import React from "react";
import {Link} from "react-router-dom";

export class ListOfCharacters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: null,
            error: null
        };
    }



    render() {
        return (
            <div>
            <div>
                <div className="play-btn">
                    <Link to={"/"} className={"play"}>
                        Home
                    </Link>
                </div>
            </div>

            <div>
                    <table className="list">
                        <thead>
                        <tr>
                            <th>Jojo Characters and Stands</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Jotaro Kujo | Star Platinum</td>
                            <td>Muhammed Avdol | Magician's Red</td>
                            <td>Joseph Joestar | Hermit Purple</td>
                            <td>Noriyaki Kakyoin | Hierophant Green</td>
                            <td>Jean Pierre Polnareff | Silver Chariot</td>
                            <td>Iggy | The Fool</td>
                            <td>DIO Brando | The World</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

