import React from 'react'
import css from "../stylesForComponents/Header.css"
import Logo from "../assets/Logo.png"
import Nav from './Nav'


const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="error" />
        <Nav/>
    </div>
  )
}

export default Header