import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;

//in {{}}, it is placing an object within an expression. when we do that, we can add CSS styles^^
//{props.children} is rendering the children of the parent--which is the STYLE. without it, we cannot render the div style on its own.