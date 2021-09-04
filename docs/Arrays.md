# Arrays

Array methods are a fundamental part of everyday life as a React developer. Understanding these five key methods will be necessary if you want to become a successful developer.

## .map()

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Examples

A common use case for the `.map()` method in React is to render a series of html elements from an array. In this example we are rendering a series of `<span>` elements with the values from the `wordArray` variable.

```jsx
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
```

_Output:_

```
// screen
this,is,an,array,

// DOM
<span>this,</span>
<span>is,</span>
<span>an,</span>
<span>array,</span>
```

<br>

You can also use `.map()` to manipulate the values of an array and return a new array with the new values. In this example we are using `.map()` in two places. First we are creating a new variable named `squaredNumArray` in the component and setting it to the result of a `.map()` method execution which squares all the numbers in the `numArray` variable. We then use a `.map()` method to create a series of `<li>` elements as children of the `<ul>` element and set the value of the `<li>` to the new squared number.

```jsx
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
```

_Output:_

```
// screen
* 4
* 16
* 36

// DOM
<ul>
  <li>4</li>
  <li>16</li>
  <li>36</li>
</ul>
```

### Exercises

<br>

## .filter()

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Examples

You can create a new variable and assign the result of a filter to it. In this example, after the filter, we are mapping the even numbers to `<li>` elements.

```jsx
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
```

_Output:_

```
// screen
* 2
* 4
* 6

// DOM
<ul>
  <li>2</li>
  <li>4</li>
  <li>6</li>
</ul>
```

<br>

You can also chain array methods together. In this example we "inline" the filter function and run `.map()` on the result to render the even numbers to `<li>` elements.

```jsx
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
```

_Output:_

```
// screen
* 2
* 4
* 6

// DOM
<ul>
  <li>2</li>
  <li>4</li>
  <li>6</li>
</ul>
```

<br>

You can also filter on object properties. In this example we filter the array of dog objects to return only dogs with the `breed` property set to 'hound'.

```jsx
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
```

### Exercises

#### Odd numbers

Replace `/*your code here*/` with an anonymous function that returns only odd numbers.  
**Hint:** Check the even number example above.

```jsx
import React from 'react';

function OddNumFilter() {
  const numArray = [1, 2, 3, 4, 5, 6];

  return (
    <ul>
      {numArray.filter(/*your code here*/).map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}

export default OddNumFilter;
```

_Expected result:_

```
* 1
* 3
* 5
```

<br>

#### Greater than

Replace `/*your code here*/` with an anonymous function that returns only numbers greater than 50.

```jsx
import React from 'react';

function GreaterThanFilter() {
  const numArray = [256, 24, 32, 4, 35, 60, 101, 2];

  return (
    <ul>
      {numArray.filter(/*your code here*/).map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}

export default GreaterThanFilter;
```

_Expected result:_

```
* 256
* 60
* 101
```

<br>

#### Multiple condition filter

Replace `/*your code here*/` with an anonymous function that returns only vehicle objects with a `make` of "dodge" AND `horsepower` greater than 350.  
**Hint:** _Refer to the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) documentation for the logical AND operator._

```jsx
import React from 'react';

function MultipleConditionFilter() {
  const vehicleArray = [
    {
      make: 'dodge',
      model: 'viper',
      horsepower: 650,
    },
    {
      make: 'bmw',
      model: 'm3',
      horsepower: 440,
    },
    {
      make: 'dodge',
      model: 'charger',
      horsepower: 325,
    },
    {
      make: 'ford',
      model: 'explorer',
      horsepower: 210,
    },
    {
      make: 'dodge',
      model: 'ram',
      horsepower: 390,
    },
  ];

  return (
    <ul>
      {vehicleArray.filter(/*your code here*/).map((vehicle, index) => (
        <li
          key={index}
        >{`${vehicle.make} ${vehicle.model} (${vehicle.horsepower}hp)`}</li>
      ))}
    </ul>
  );
}

export default MultipleConditionFilter;
```

_Expected result:_

```
// screen
* dodge viper (650hp)
* dodge ram (390hp)
```
