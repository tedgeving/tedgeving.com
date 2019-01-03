import React from 'react'
import logo from '../images/400x400.png'
const Header = ({siteTitle}) => (
  <header>
    <div className="image">
      <img src={logo} alt="San Juan County CO 37.877210, -107.653327"/>
    </div>
  </header>
)

export default Header
