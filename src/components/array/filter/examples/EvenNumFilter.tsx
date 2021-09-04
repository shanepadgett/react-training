import React from 'react';

function EvenNumFilter() {
  const numArray = [1, 2, 3, 4, 5, 6];
  const evenNums = numArray.filter((num) => num % 2 === 0);

  return (
    <ul>
      {evenNums.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}

export default EvenNumFilter;
