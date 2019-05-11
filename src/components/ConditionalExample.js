// src/components/ConditionalExample.js
import React from 'react';

//  `if - else` statements don't work inside JSX expressions. 
//   When using `if - else` it needs to be in a function.
const renderConditionaly = (propsPassed) => {
  if (propsPassed.title) { 
    return <h3>TRUE - {propsPassed.title}</h3>; // <SomeComponentGoesHere/>
  } else {
    return <h3>FALSE - {propsPassed.title}</h3>; //<OtherComponentGoesHere/>;
  } 
}

// function component
const conditionalExample = (props) => {
  return (
    <div>
      {
        renderConditionaly(props)
        
        // OR with ternary operator:      checkTruthyOrFalsy  ?  returnThisIfTrue  :  returnThisIfFalse 
        //props.title ? 
        //<h2>Ternary - TRUE  <br/> props.title = {props.title}</h2> 
        //: 
        //<h2>Ternary - FALSE <br/> props.title = {props.title}</h2> 
      }

    </div>
  )
};

export default conditionalExample;