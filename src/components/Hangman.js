import { Component } from "react";
import "./Hangman.css";
import { randomWord } from "./Words";

// <--- Hangman images --->
import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";

class Hangman extends Component {
  // <--- Max wrong guesses 6 --->
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    };
  }

  // <--- Adding guessed letters --->
  handleGuess = (e) => {
    let letter = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  // <--- Replace letters with " _ " --->
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  // <--- Page buttons --->
  generateButtons() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
      <button
        type="button"
        class="btn btn-dark m-1"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  // <---Play again Button --->
  playAgainButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    });
  };

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!";
    }
    if (gameOver) {
      gameStat = "You Lost!!!";
    }

    return (
      <div>
        <h1 className="title">Hangman</h1>
        <img
          className="hangman"
          src={this.props.images[this.state.mistake]}
          alt=""
        />

        <h3 className="wrongAnswers">
          Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
        </h3>

        <div>
          <h3>Guess the word:</h3>
          <p className="guessedWordDash">
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <br />
          <h3>{gameStat}</h3>

          <button className="btn btn-dark m-1" onClick={this.playAgainButton}>
            Play Again
          </button>
        </div>
      </div>
    );
  }
}

export default Hangman;
