# Props

Props are arguments passed into React components. Props are passed to components via HTML attributes. [W3Schools - Props](https://www.w3schools.com/react/react_props.asp)

## Children prop

There is a special prop in react called `children` that gives you access to the child contents passed into an HTML element. This prop should be used when you want to take the child content passed into a compoonent and render it somewhere specific in your components JSX.

## Examples

### `name` prop

Here we are defining a component named `NameProp` and adding the `props` parameter in the parenthesis `()`. The `props` parameter allows you to access any data that was passed into to the component via HTML style attributes and in this example we are accessing the `name` property on the `props` parameter object.

```jsx
import React from 'react';

function NameProp(props) {
  return <span>{props.name}</span>;
}

export default NameProp;
```

If we now render the component named `NameProp` and set the `name` prop like an HTML attribute, then we will see a `<span>` element get rendered with the content being set to the string we passed in.

```jsx
import React from 'react';
import NameProp from './components/props/examples/NameProp';

function App() {
  return <NameProp name="Phil" />;
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

Here we are defining a component named `CardChildren` and adding the `props` parameter in the parenthesis `()`. We then have a basic tree of elements that make up the content of a basic card; including a card header, body, and footer. Within the `card-body` element we pass in the special `children` prop so that any child content passed in to the `CardChildren` component gets rendered in the body section of the card.

```jsx
import React from 'react';

function CardChildren(props) {
  return (
    <div className="card">
      <div className="card-header">Header Text</div>
      <div className="card-body">{props.children}</div>
      <div className="card-footer">Footer Text</div>
    </div>
  );
}

export default CardChildren;
```

Now if we render multiple `CardChildren` components and pass in different types of child content, each card will render with a div containing "Header Text", a div containing the child content passed in, and a div containing "Footer Text".

```jsx
import React from 'react';
import CardChildren from './components/props/examples/CardChildren';

function App() {
  return (
    <>
      <CardChildren>
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg"
          alt=""
        />
      </CardChildren>
      <CardChildren>
        <span>Hello World</span>
      </CardChildren>
      <CardChildren>A little bit of text</CardChildren>
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
  <div className="card-body">
    <img
      src="https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg"
      alt=""
    />
  </div>
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

Create a component named `CustomPropsAndChildren`. The component should accept three custom props: `itemName`, `itemDescription`, `price`. The component should render three `<div>` elements inside a fragment to display the custom prop data. Also render the `children` prop inside a fourth `div`. Render the `CustomPropsAndChildren` component in the `App` component and pass in the custom props as well as a child `div` with the following text in it: I am a child

_Example Desired Output:_

```
// screen
Item name: cookie
Item description: a yummy snack
Price: $2.58
I am a child

// DOM
<div>Item name: cookie</div>
<div>Item description: a yummy snack</div>
<div>Price: $2.58</div>
<div>I am a child</div>
```
