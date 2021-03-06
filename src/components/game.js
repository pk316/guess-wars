
import React, { Component } from 'react' ;
import PreviousGuesses from './previousGuess';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: this.generateRandomNum(),
            guess: '',
            previousGuesses: [],
            toggle: false,
            isEnabled: true
        };
        this.checkGuess = this.checkGuess.bind(this);
        this.reset = this.reset.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.previousGuesses = this.previousGuesses.bind(this);
    }
    generateRandomNum = () => {
        return Math.floor(Math.random() * 100) + 1
    }
    
    reset = () => {
        this.setState(this.state);
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
        if (guess == '' || guess == undefined || guess > 100) {
            return
        }
        if (guess > num) {
            this.setState({
                response: guess + ' is too high'
            }, () => {
                this.previousGuesses()
            })
        } else if (guess < num) {
            this.setState({
                response: guess + ' is too Low'
            }, () => {
                this.previousGuesses()
            })
        } else {
            this.setState({
                winner: "You've guessed the number!",
                isEnabled: false,
                response: guess + ' is the correct number!'
            }, () => {
                this.previousGuesses()
                // this.winner()
            })
        }
    }
    previousGuesses = () => {
        const { guess, response, previousGuesses} = this.state;
            this.setState({
                previousGuesses: [response, ...previousGuesses],
                guess: ''
            })
    }
    // toggle() {
    //     this.setState(prevState => ({
    //         toggle: !prevState.toggle
    //     }));
    // }
    // winner = () => {
    //     this.toggle();
    // }
    

    render(){
        const {num, guess, response, previousGuesses, toggle, winner, isEnabled } = this.state;
        const display = {display: 'block'};
        const hide = {display: 'none'};
        return (
            <div className="container">
                <h1 className="game-title text-center my-3">Guess Wars</h1>
                <div className="win-div">
                    <h1 className="win-response">{winner}</h1>
                </div>
                <form className="form-group">
                    <input value={guess} onChange={this.inputChange} className="input-lg text-center" type="number" placeholder="1 - 100" min="0" max="100" autoFocus="autofocus" />
                    <div className="row justify-content-center">
                        <button disabled={!isEnabled} onClick={this.checkGuess} className="btn btn-lg btn-outline-success m-3 text-center">GUESS</button>
                        <button onClick={this.reset} className="btn btn-lg btn-outline-danger m-3 text-center">RESET</button>
                    </div>
                </form>  
                <div className="intro">
                    <div className="intro-content">
                        <p className="intro-text">Can you guess correct number ??</p>
                    </div>
                    <div className="guess">
                        <div className="guess-content">
                            <PreviousGuesses previousGuesses={previousGuesses} />
                        </div>
                    </div>
                </div>
                {/* <div className="win-modal" style={this.state.toggle ? display : hide}>
                    <span onClick={this.close} className="close-btn">&times;</span>
                    <div className="modal-content">
                        <div>
                            <p>You Guessed it!!</p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Game;