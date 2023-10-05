import React from 'react'
import css from "./About.css"
import aboutImageA from "../../assets/Mario and Adrian A.jpg"
import aboutImageB from "../../assets/restaurant chef B.jpg"

const About = () => {
  return (
    <section className='about'>
        <div className='aboutTextBox'>
            <span id="aboutHd" className='mainHeading'>Little Lemon</span>
            <span id='aboutSubHd' className='mainSubHeading'>Chicago</span>
            <p id='aboutParaText' className='paragraphText'>We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
            </p>
        </div>
        <div className='aboutImageBox'>
            <img className='aboutImages' id='aboutImageA' src={aboutImageA} alt="error" />
            <img className='aboutImages' id='aboutImageB' src={aboutImageB} alt="error" />
        </div>
    </section>
  )
}

export default About