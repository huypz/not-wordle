import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORD_LENGTH } from '../../constants';

function Guess({ guess, answer }) {
  if (guess === undefined) {
    return (
      <p className="guess">
        {range(WORD_LENGTH).map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }

  const guessResult = checkGuess(guess, answer);

  return (
    <p className="guess">
      {guessResult.map(({ letter, status }, index) => (
        <span key={index} className={`${status} cell`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
