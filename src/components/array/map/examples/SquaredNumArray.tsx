import React from 'react';

function SquaredNumArray() {
  const numArray = [2, 4, 6];
  const squaredNumArray = numArray.map((num) => num * num);

  return (
    <ul>
      {squaredNumArray.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}

export default SquaredNumArray;
