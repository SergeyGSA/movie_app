import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../App.scss'

function Search({ search }) {
  const [searchValue, setSearchValue] = useState('')

  const handlerSearchValue = e => {
    setSearchValue(e.target.value)
  }

  const sendSearchValue = () => {
    search(searchValue.trim())
    setSearchValue('')
  }

  return (
    <div className="search">
      <form onSubmit={e => e.preventDefault()}>
        <input 
          className="search__field" 
          type="search" 
          aria-label="search field"
          value={searchValue}
          onChange={handlerSearchValue}
        />
        <button 
          className="search__btn" 
          type="submit" 
          aria-label="search button"
          onClick={sendSearchValue}
        >
          Search
        </button>
      </form>
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
}

export default Search
