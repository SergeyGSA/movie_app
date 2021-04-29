import React, { useEffect, useReducer } from 'react'
import { initialState, reducer } from '../reducer'
import axios from 'axios'

import Header from './Header'
import Search from './Search'
import Movie from './Movie'

import '../App.scss'
import spinner from '../assets/spinner.gif'

function App() {
  const API_KEY = '1e5f26c'

  const [ state, dispatch ] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=mask&apikey=${API_KEY}`)
        .then(jsonResponse => {
            dispatch({
              type: 'MOVIE_DOWNLOAD_SUCCESS',
              payload: jsonResponse.data.Search
            })
        })
  }, [])

  const searchFunction = searchValue => {
    dispatch({
      type: 'MOVIE_DOWNLOAD_REQUEST'
    })

    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
        .then(jsonResponse => {
          if (jsonResponse.data.Response === 'True') {
            dispatch({
              type: 'MOVIE_DOWNLOAD_SUCCESS',
              payload: jsonResponse.data.Search
            })
          } else {
            dispatch({
              type: 'MOVIE_DOWNLOAD_FAILURE',
              error: jsonResponse.data.Error
            })
          }
        })
  }

  const { movies, errorMessage, loading } = state

  const moviesList = 
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? ( 
      <div className="error-message"> {errorMessage} </div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}_${movie.Title}`} movie={movie} />
      ))
    ) 
     
  return (
    <div className="app">
      <Header text="Rotten Cucumbers"/>
      <Search search={searchFunction} />
      <div className="movies"> 
        <div className="movies-wrapper">
          {moviesList}
        </div>
      </div>
    </div>
  )
}

export default App
