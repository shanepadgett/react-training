import React from 'react';
import WordArray from './components/array/map/examples/WordArray';
import SquaredNumArray from './components/array/map/examples/SquaredNumArray';
import EvenNumFilter from './components/array/filter/examples/EvenNumFilter';
import InlineArrayFilter from './components/array/filter/examples/InlineArrayFilter';
import ObjectFilter from './components/array/filter/examples/ObjectFilter';

function App() {
  return (
    <>
      <WordArray />
      <SquaredNumArray />
      <EvenNumFilter />
      <InlineArrayFilter />
      <ObjectFilter />
    </>
  );
}

export default App;
