import React, { Component } from react;
import '../game.css';

class Game extends Component{
    constructor(props){
        super(props);

        this.state = {
            num : generateRandomNum(),
            guess : ''
        }
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default Game;