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
