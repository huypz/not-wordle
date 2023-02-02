import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';

function Guess({ guessResults }) {
  if (!guessResults) {
    return (
      <p className="guess">
        {range(WORD_LENGTH).map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {guessResults.map(({ letter, status }, index) => (
        <span key={index} className={`${status} cell`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
