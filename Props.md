# Props

Props are arguments passed into React components. Props are passed to components via HTML attributes. [W3Schools - Props](https://www.w3schools.com/react/react_props.asp)

## Examples

### `name` prop

Here we are defining a component named `ComponentWithProps` and adding the `props` parameter in the parenthesis `()`. The `props` parameter allows you to access any data that was passed into to the component via HTML style attributes and in this example we are accessing the `name` property on the `props` parameter object.

```jsx
import React from 'react'

function ComponentWithProps(props) {
  return <span>{props.name}</span>
}

export default ComponentWithProps
```

If we now render the component named `ComponentWithProps` and set the `name` prop like an HTML attribute, we will see a `<span>` element get rendered with the content being set to the string "Phil".

```jsx
import React from 'react'
import ComponentWithProps from './ComponentWithProps'

function App() {
  return <ComponentWithProps name="Phil" />
}

export default ComponentWithProps
```

_Output:_

```
// on screen
Phil

// in DOM tree
<span>Phil</span>
```

## Exercises
