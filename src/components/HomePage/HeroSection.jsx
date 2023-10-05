import React, { useEffect, useState } from 'react'
import css from "./HeroSection.css"
import heroImage from "../../assets/restauranfood.jpg"

const HeroSection = () => {
  
  return (
    <section className='hero' id='hero'>
      <div className='heroContainer' id='heroContainer'>
        <div className='heroDetails' id='heroDetails'>
            <span className='mainHeading heroHeading'>
              Little Lemon
            </span>
            <span className='mainSubHeading heroText'>Chicago</span>
            <p className='leadText heroText'>
              We are a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist.
            </p>
            <button className='mainBtn yellowBorderBtn'>
              Reserve a Table
            </button>
        </div>
        <img className="heroImage" src={heroImage} alt="error" />
      </div>
    </section>
  )
}

export default HeroSection