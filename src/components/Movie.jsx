import React from 'react'

import '../App.scss'
import noPosterImg from '../assets/no-poster.jpg'

function Movie({ movie }) {
  const poster =
    movie.Poster === 'N/A' ? noPosterImg : movie.Poster

  return (
    <div className="movie">
      <span 
        className="movie__heading"
      > 
        {movie.Title} 
      </span>
      <img 
        className="movie__img" 
        src={poster} 
        alt={movie.Title}
        width="270px"
        height="400px"
      />
      <span 
        className="movie__year"
      > 
        {movie.Year} 
      </span>
    </div>
  )
}

export default Movie