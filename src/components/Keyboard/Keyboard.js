import React from 'react';

function Keyboard({ keyboardState }) {
  return (
    <div className="keys-wrapper">
      <p>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => (
          <span key={letter} className={`${keyboardState[letter]} key`}>
            {letter}
          </span>
        ))}
      </p>
      <p style={{ left: '2%' }}>
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter) => (
          <span key={letter} className={`${keyboardState[letter]} key`}>
            {letter}
          </span>
        ))}
      </p>
      <p style={{ left: '6%' }}>
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter) => (
          <span key={letter} className={`${keyboardState[letter]} key`}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Keyboard;
