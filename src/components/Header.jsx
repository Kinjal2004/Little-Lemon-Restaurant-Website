import React from 'react'
import css from "../stylesForComponents/Header.css"
import Logo from "../assets/Logo.png"
import Nav from './Nav'


const Header = () => {
  return (
    <section className='SecContainer'>
      <div className='headerContainer'>
        <img className='headerImg' src={Logo} alt="error" />
        <Nav/>
      </div>
    </section>
  )
}

export default Header