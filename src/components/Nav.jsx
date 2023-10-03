import React from 'react'
import css from "../stylesForComponents/Nav.css"

const Nav = () => {
  return (
        <>
        <nav className='navMenu'>
            <menu>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </menu>
        </nav>
        </>
  )
}

export default Nav