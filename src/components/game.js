import React, { Component } from 'react' ;
import './game.css';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: this.generateRandomNum(),
            guess: ''
        };
        this.checkGuess = this.checkGuess.bind(this);
        this.reset = this.reset.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    generateRandomNum = () => {
        return Math.floor(Math.random() * 11)
    }
    reset = () => {
        this.setState(this.state)
    }
    inputChange(event) {
        event.preventDefault();
        this.setState({
            guess: event.target.value,
        })
    };
    checkGuess = (event) => {
        event.preventDefault();
        const { num, guess } = this.state;
        if (guess == '' || guess == undefined) {
            return
        }
        if (guess > num) {
            this.setState({
                response: guess + ' is too high'
            })
        } else if (guess < num) {
            this.setState({
                response: guess + ' is too Low'
            })
        } else {
            this.setState({
                response: guess + ' is the correct number!'
            })
        }
    }

    render(){
        const {num, guess, response} = this.state;
        return (
            <div className="container">
                <h1 className="text-center my-3">Guessing Game</h1>
                <form className="form-group">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <input value={guess} onChange={this.inputChange} className="numInput form-control" type="number" />
                        </div>
                        <div className="row justify-content-center ">
                            <button onClick={this.checkGuess} className="btn btn-lg btn-outline-success col-9">GUESS</button>
                            <button onClick={this.reset} className="btn btn-lg btn-outline-danger col-9">RESET</button>
                        </div>
                    </div>
                </form>
                <p>{response}</p>
            </div>
        )
    }
}

export default Game;