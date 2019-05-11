// src/components/ImprovedCard.js
import React from 'react';

const improvedCard = (props) => {
  return (
    <div className='movie-card'>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      {/* 
        {
          props.hasOscars ?
            <p>Got the Oscar Award!!!! </p>
            :
            <p>Great movie but no Oscars! 😔</p> 
        }
     */}
      {props.hasOscars && <p>Got the Oscar Award!!!! </p>}
      {!props.hasOscars && <p>Great movie but no Oscars! 😔</p> }
      <button className='btn' onClick={props.clickToDelete}>Delete</button>
    </div>
  )
};

export default improvedCard;  