import React from 'react';

function InlineArrayFilter() {
  const numArray = [1, 2, 3, 4, 5, 6];

  return (
    <ul>
      {numArray
        .filter((num) => num % 2 === 0)
        .map((num, index) => (
          <li key={index}>{num}</li>
        ))}
    </ul>
  );
}

export default InlineArrayFilter;
