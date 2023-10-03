import React from 'react'
import css from "../stylesForComponents/Footer.css"
import footerImage from "../assets/Mario and Adrian b.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <img src={footerImage} alt="error" />
        <div>
            <span>Doormat Navigation</span>
            <menu>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservation</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </menu>
        </div>
        <div>
            <span>Contacts</span>
            <menu>
                <li><a href="">Address</a></li>
                <li><a href="">Phone</a></li>
                <li><a href="">Email</a></li>
            </menu>
        </div>
        <div>
            <span>Social Media</span>
            <menu>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">twitter</a></li>
            </menu>
        </div>
    </div>
  )
}

export default Footer