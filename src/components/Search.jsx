import React from 'react'

import '../App.scss'

function Search() {
  return (
    <div className="search">
      <form>
        <input className="search__field" type="search" />
        <button className="search__btn" type="submit"> Search </button>
      </form>
    </div>
  )
}

export default Search
