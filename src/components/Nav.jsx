import React, { useEffect, useState } from 'react'
import css from "../stylesForComponents/Nav.css"
import {BiMenu} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai" 

const Nav = () => {
  const [hamValue, setHamValue] = useState(false);

  const handleResize = () => {
    if(window.innerWidth >= 1200){
      setHamValue(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  if(!hamValue){
    return (
      <div className='navBar'>
        <nav className='Navigation'>
            <menu className='navMenu'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </menu>
        </nav>
        <BiMenu  className='navHamburg'
        onClick={() => setHamValue(!hamValue)}/>
      </div>
    )
  } else {
    if(hamValue){
      return (
        <>
          <nav className='hamburgerNav'>
          <AiOutlineClose  className='navHamburg'
          onClick={() => setHamValue(!hamValue)}/>
              <menu className='navMenu'>
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
  }
}

export default Nav