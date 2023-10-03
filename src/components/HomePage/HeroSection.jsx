import React from 'react'
import css from "./HeroSection.css"
import heroImage from "../../assets/restauranfood.jpg"

const HeroSection = () => {
  return (
    <div className='hero'>
        <section className="heroSection">
            <div>
                <div>
                    <span>Little Lemon</span>
                </div>
                <span>Chicago</span>
                <p>We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern
                    twist.
                </p>
                <div>
                    <button>Reserve a Table</button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="error" />
            </div>
        </section>
      </div>
  )
}

export default HeroSection