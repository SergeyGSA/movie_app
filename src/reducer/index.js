const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'MOVIE_DOWNLOAD_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      } 
    case 'MOVIE_DOWNLOAD_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }
    case 'MOVIE_DOWNLOAD_REQUEST':  
      return {
        ...state,
        loading: true,
        errorMessage: null
      }
    default: {
      return state
    }
  }
}

export { initialState, reducer }