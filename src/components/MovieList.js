import React from 'react';
import shortid from 'shortid';
import Card from './Card';

const movies = [
  { title: 'Jurassic Park', director: 'Steven Spielberg' },
  { title: 'Sharknado', director: 'Anthony C. Ferrante' },
  { title: 'Titanic', director: 'James Cameron' },
];

// Create a unique id on each movie object
movies.forEach(movie => (movie.id = shortid.generate()));

function MovieList() {
  return (
    <ul>
      {movies.map(movieObj => {
        return <Card key={movieObj.id} movie={movieObj} />;
      })}
    </ul>
  );
}
export default MovieList;
