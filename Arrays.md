# Arrays

Array methods are a fundamental part of everyday life as a React developer. Understanding these five key methods will be necessary if you want to become a successful developer.

## .filter()

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Examples

You can create a new variable and assign the result of a filter to it. In this example, after the filter, we are mapping the even numbers to `<li>` elements.

```jsx
import React from 'react'

function MyComponent() {
  const numArray = [1, 2, 3, 4, 5, 6]
  const evenNums = numArray.filter((num) => num % 2 === 0)

  return (
    <ul>
      {evenNums.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  )
}

export default MyComponent
```

You can also chain array methods together. In this example we "inline" the filter function and run `.map()` on the result to render the even numbers to `<li>` elements.

```jsx
import React from 'react'

function MyComponent() {
  const numArray = [1, 2, 3, 4, 5, 6]

  return (
    <ul>
      {numArray
        .filter((num) => num % 2 === 0)
        .map((num, index) => (
          <li key={index}>{num}</li>
        ))}
    </ul>
  )
}

export default MyComponent
```

You can also filter on object properties. In this example we filter the array of dog objects to return only dogs with the `breed` property set to 'hound'.

```jsx
import React from 'react'

function MyComponent() {
  const dogArray = [
    {
      breed: 'hound',
      name: 'jake',
    },
    {
      breed: 'hound',
      name: 'paul',
    },
    {
      breed: 'maltese',
      name: 'mackie',
    },
  ]

  return (
    <ul>
      {dogArray
        .filter((dog) => dog.breed === 'hound')
        .map((dog, index) => (
          <li key={index}>{dog.breed}</li>
        ))}
    </ul>
  )
}

export default MyComponent
```

### Exercises

#### Odd numbers

Replace `/*your code here*/` with an anonymous function that returns only odd numbers.  
**Hint:** Check the even number example above.

```jsx
import React from 'react'

function MyComponent() {
  const numArray = [1, 2, 3, 4, 5, 6]

  return (
    <ul>
      {numArray.filter(/*your code here*/).map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  )
}

export default MyComponent
```

**Expected result**

```
* 1
* 3
* 5
```

#### Greater than

Replace `/*your code here*/` with an anonymous function that returns only number greater than 50.

```jsx
import React from 'react'

function MyComponent() {
  const numArray = [256, 24, 32, 4, 35, 60, 101, 2]

  return (
    <ul>
      {numArray.filter(/*your code here*/).map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  )
}

export default MyComponent
```

**Expected result**

```
* 256
* 60
* 101
```

#### Object filter

Replace `/*your code here*/` with an anonymous function that returns only vehicle objects with a `make` of "dodge" AND `horsepower` greater than 350.  
**Hint:** _Refer to the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) documentation for the logical AND operator._

```jsx
import React from 'react'

function MyComponent() {
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
  ]

  return (
    <ul>
      {vehicleArray.filter(/*your code here*/).map((vehicle, index) => (
        <li
          key={index}
        >{`${vehicle.make} ${vehicle.model} (${vehicle.horsepower}hp)`}</li>
      ))}
    </ul>
  )
}

export default MyComponent
```

**Expected result**

```
* dodge viper (650hp)
* dodge ram (390hp)
```
