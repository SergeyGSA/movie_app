import React from 'react'
import PropTypes from 'prop-types'

import '../App.scss'
import noPosterImg from '../assets/no-poster.jpg'

function Movie({ movie }) {
  const poster =
    movie.Poster === 'N/A' ? noPosterImg : movie.Poster

  return (
    <div className="movie">
      <h2 
        className="movie__heading"
        title={movie.Title}
      > 
        <a
          className="movie__heading-link" 
          href={`https://www.imdb.com/title/${movie.imdbID}`}
        > 
          {movie.Title}
        </a>  
      </h2>
      <img 
        className="movie__img" 
        src={poster} 
        alt={movie.Title}
      />
      <span 
        className="movie__year"
      > 
        {movie.Year} 
      </span>
    </div>
  )
}

Movie.propTypes = {
  movie:  PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Movie