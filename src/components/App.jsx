import React, { useEffect, useReducer } from 'react'
import { initialState, reducer } from '../reducer'
import axios from 'axios'

import Header from './Header'
import Search from './Search'
import Movie from './Movie'

import '../App.scss'

function App() {
  const API_KEY = '1e5f26c'

  const [ state, dispatch ] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=usa&apikey=${API_KEY}`)
        .then(jsonResponse => {
            dispatch({
              type: 'MOVIE_DOWNLOAD_SUCCESS',
              payload: jsonResponse.data.Search
            })
        })
  }, [])

  const searchFunction = searchValue => {
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
        .then(jsonResponse => {
          dispatch({
            type: 'MOVIE_DOWNLOAD_REQUEST'
          })
        })
  }

  const { movies, errorMessage, loading } = state

  const moviesList = 
    loading && !errorMessage ? (
      console.log('loading')
    ) : errorMessage ? ( 
      console.log('error')
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}_${movie.Title}`} movie={movie} />
      ))
    ) 
     
  return (
    <div className="app">
      <Header text="Rotten Cucumbers"/>
      <Search search={searchFunction} />
      <div className="movies"> {moviesList} </div>
    </div>
  )
}

export default App
