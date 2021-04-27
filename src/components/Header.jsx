import React from 'react'

import '../App.scss'

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title"> {props.text} </h1>
    </header>
  )
}

export default Header
