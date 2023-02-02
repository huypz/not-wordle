import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';

import Guess from '../Guess';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessInput, setGuessInput] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [isGameInSession, setIsGameInSession] = React.useState(true);

  function onSubmitGuess(event) {
    event.preventDefault();

    const guess = guessInput.toUpperCase();
    const newGuesses = [...guesses, guess];

    setGuesses(newGuesses);
    setGuessInput('');
    setIsGameInSession(
      newGuesses.length < NUM_OF_GUESSES_ALLOWED && guess !== answer
    );
  }

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} guess={guesses[index]} answer={answer} />
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
      {isGameInSession ||
        (guesses[guesses.length - 1] === answer ? (
          <Banner
            type={'happy'}
            message={
              <>
                <strong>Congratulations!</strong> Got it in{' '}
                <strong>{guesses.length} guesses</strong>.
              </>
            }
          />
        ) : (
          <Banner
            type={'sad'}
            message={
              <>
                Sorry, the correct answer is <strong>{answer}</strong>.
              </>
            }
          />
        ))}
    </>
  );
}

export default Game;
