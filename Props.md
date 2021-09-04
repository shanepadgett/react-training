# Props

Props are arguments passed into React components. Props are passed to components via HTML attributes. [W3Schools - Props](https://www.w3schools.com/react/react_props.asp)

## Children prop

There is a special prop in react called `children` that gives you access to the child contents passed into an HTML element. This prop should be used when you want to take the child content passed into a compoonent and render it somewhere specific in your components JSX.

## Examples

### `name` prop

Here we are defining a component named `ComponentWithProps` and adding the `props` parameter in the parenthesis `()`. The `props` parameter allows you to access any data that was passed into to the component via HTML style attributes and in this example we are accessing the `name` property on the `props` parameter object.

```jsx
import React from "react";

function ComponentWithProps(props) {
  return <span>{props.name}</span>;
}

export default ComponentWithProps;
```

If we now render the component named `ComponentWithProps` and set the `name` prop like an HTML attribute, then we will see a `<span>` element get rendered with the content being set to the string we passed in.

```jsx
import React from "react";
import ComponentWithProps from "./ComponentWithProps";

function App() {
  return <ComponentWithProps name="Phil" />;
}

export default App;
```

_Output:_

```
// on screen
Phil

// in DOM tree
<span>Phil</span>
```

<br>

### `children` prop

Here we are defining a component named `Card` and adding the `props` parameter in the parenthesis `()`. We then have a basic tree of elements that make up the content of a basic card; including a card header, body, and footer. Within the `card-body` element we pass in the special `children` prop so that any child content passed in to the `Card` component gets rendered in the body section of the card.

```jsx
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">Header Text</div>
      <div className="card-body">{props.children}</div>
      <div className="card-footer">Footer Text</div>
    </div>
  );
}

export default Card;
```

Now if we render multiple `Card` components and pass in different types of child content, each card will render with a div containing "Header Text", a div containing the child content passed in, and a div containing "Footer Text".

```jsx
import React from "react";
import Card from "./Card";

function App() {
  return (
    <>
      <Card>
        <img src="logo.png" />
      </Card>
      <Card>
        <span>Hello World</span>
      </Card>
      <Card>A little bit of text</Card>
    </>
  );
}

export default App;
```

_Output:_

```jsx
// in DOM tree
<div className="card">
  <div className="card-header">Header Text</div>
  <div className="card-body"><img src="logo.png" /></div>
  <div className="card-footer">Footer Text</div>
</div>
<div className="card">
  <div className="card-header">Header Text</div>
  <div className="card-body"><span>Hello World</span></div>
  <div className="card-footer">Footer Text</div>
</div>
<div className="card">
  <div className="card-header">Header Text</div>
  <div className="card-body">A little bit of text</div>
  <div className="card-footer">Footer Text</div>
</div>
```

## Exercises
