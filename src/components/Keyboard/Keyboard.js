import React from 'react';

function Keyboard({ keyboardState }) {
  return (
    <div className="keys-wrapper">
      <p>
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
          <span key={letter} className={`${keyboardState[letter]} key`}>
            {letter}
          </span>
        ))}
      </p>
      <p style={{ left: '2%' }}>
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => (
          <span key={letter} className={`${keyboardState[letter]} key`}>
            {letter}
          </span>
        ))}
      </p>
      <p style={{ left: '6%' }}>
        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
          <span key={letter} className={`${keyboardState[letter]} key`}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Keyboard;
