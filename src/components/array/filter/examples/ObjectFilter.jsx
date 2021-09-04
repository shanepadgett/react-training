import React from 'react';

function ObjectFilter() {
  const dogArray = [
    {
      breed: 'hound',
      name: 'billy',
    },
    {
      breed: 'hound',
      name: 'paul',
    },
    {
      breed: 'maltese',
      name: 'mackie',
    },
  ];

  return (
    <ul>
      {dogArray
        .filter((dog) => dog.breed === 'hound')
        .map((dog, index) => (
          <li key={index}>{dog.name}</li>
        ))}
    </ul>
  );
}

export default ObjectFilter;
