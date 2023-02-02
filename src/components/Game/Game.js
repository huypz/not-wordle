import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

import Banner from '../Banner';
import Keyboard from '../Keyboard';
import Guess from '../Guess';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessInput, setGuessInput] = React.useState('');
  const [guessResults, setGuessResults] = React.useState([]);
  const [isGuessCorrect, setIsGuessCorrect] = React.useState(false);
  const [keyboardState, setKeyboardState] = React.useState({});
  const [isGameInSession, setIsGameInSession] = React.useState(true);

  function onSubmitGuess(event) {
    event.preventDefault();

    const guess = guessInput.toUpperCase();
    setIsGuessCorrect(guess === answer);

    const guessResult = checkGuess(guess, answer);
    const newGuessResults = [...guessResults, guessResult];
    setGuessResults(newGuessResults);

    const newKeyboardState = { ...keyboardState };
    guessResult.forEach(({ letter, status }) => {
      newKeyboardState[letter] = status;
    });
    setKeyboardState(newKeyboardState);

    setIsGameInSession(
      newGuessResults.length < NUM_OF_GUESSES_ALLOWED && guess !== answer
    );

    setGuessInput('');
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuessInput('');
    setGuessResults([]);
    setIsGuessCorrect(false);
    setKeyboardState({});
    setIsGameInSession(true);
  }

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} guessResults={guessResults[index]} />
        ))}
      </div>
      <form className="guess-input-wrapper" onSubmit={onSubmitGuess}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={!isGameInSession}
          minLength={WORD_LENGTH}
          maxLength={WORD_LENGTH}
          value={guessInput}
          onChange={(event) => setGuessInput(event.target.value)}
        />
      </form>

      <Keyboard keyboardState={keyboardState} />

      {isGameInSession ||
        (isGuessCorrect ? (
          <Banner
            type={'happy'}
            children={
              <>
                <p>
                  <strong>Congratulations!</strong> Got it in{' '}
                  <strong>{guessResults.length} guesses</strong>.
                </p>
                <button onClick={restartGame}>
                  <strong>RESTART GAME</strong>
                </button>
              </>
            }
          />
        ) : (
          <Banner
            type={'sad'}
            children={
              <>
                <p>
                  Sorry, the correct answer is <strong>{answer}</strong>.
                </p>
                <button onClick={restartGame}>
                  <strong>RESTART GAME</strong>
                </button>
              </>
            }
          />
        ))}
    </>
  );
}

export default Game;
