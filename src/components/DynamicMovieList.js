// src/components/DynamicMovieList.js
import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';

class DynamicMovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: props.moviesArray,
      showMovies: true              /* ADD A BOOLEAN PROPERTY TO THE STATE */
    }
  };

  toggleMovies = () => {
    this.setState({ showMovies: !this.state.showMovies });
  }

  deleteMovie = (movieIndex) => {
    const moviesCopy = this.state.movies;
    moviesCopy.splice(movieIndex, 1);
    this.setState( {movies: moviesCopy} );
  }

  render() {
    return (
      <div>
        <button className='btn' onClick={this.toggleMovies}>
          Toggle Movies
        </button>

        <ul>

        {
          this.state.showMovies ? 
          this.state.movies.map( (oneMovie, index) => {
            return <ImprovedCard key={index} {...oneMovie} clickToDelete={ ()=> this.deleteMovie(index)} />
          })
          :
          null
        }
        
        </ul>
      </div>
    )
  }
}

export default DynamicMovieList; 