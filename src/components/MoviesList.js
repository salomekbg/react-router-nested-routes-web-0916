import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  const movies = props.movies;

  return (
    <div>
      <div className='col-md-4'>
        <ul>
          {movies.map((movie) => <MoviesListItem movie={movie} key={movie.id} />)}
        </ul>
        <Link to="/movies/new">Add a Movie</Link>
      </div>
    </div>
  )
}
