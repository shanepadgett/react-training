import React from 'react';

function WordArray() {
  const wordArray = ['this', 'is', 'an', 'array'];

  return (
    <>
      {wordArray.map((word) => (
        <span>{`${word},`}</span>
      ))}
    </>
  );
}

export default WordArray;
