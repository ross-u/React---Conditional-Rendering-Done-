import React from 'react';
function Card({ movie }) {
  // const {movie} = props;
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
    </div>
  );
}
export default Card;
