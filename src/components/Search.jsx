import React, { useState } from 'react'

import '../App.scss'

function Search({ search }) {
  const [searchValue, setSearchValue] = useState('')

  const handlerSearchValue = e => {
    setSearchValue(e.target.value)
  }

  const sendSearchValue = () => {
    search(searchValue)
    setSearchValue('')
  }

  return (
    <div className="search">
      <form onSubmit={e => e.preventDefault()}>
        <input 
          className="search__field" 
          type="search" 
          value={searchValue}
          onChange={handlerSearchValue}
        />
        <button 
          className="search__btn" 
          type="submit" 
          onClick={sendSearchValue}
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
