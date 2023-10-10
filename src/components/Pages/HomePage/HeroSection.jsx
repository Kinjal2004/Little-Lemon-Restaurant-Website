import React, { useEffect, useState } from 'react'
import css from "./HeroSection.css"
import heroImage from "../../../assets/restauranfood.jpg"

const HeroSection = () => {
  
  return (
    <section className='section primary-background hero'>
      <div className='container grid-container heroContainer'>
        <div className='about-text-box'>
          <div>
            <h1>Little Lemon</h1>
            <h2 className='heroText'>Chicago</h2>
          </div>
            <p className='heroText'>
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