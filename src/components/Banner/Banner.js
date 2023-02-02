import React from 'react';

function Banner({ type, message }) {
  return (
    <div className={`${type} banner`}>
      <p>{message}</p>
    </div>
  );
}

export default Banner;
