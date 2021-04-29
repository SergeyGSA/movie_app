import React from 'react'
import PropTypes from 'prop-types'

import '../App.scss'

function Header({ text }) {
  return (
    <header className="header">
      <h1 className="header__title"> {text} </h1>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
