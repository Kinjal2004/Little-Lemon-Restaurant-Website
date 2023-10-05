import React from 'react'
import css from "../stylesForComponents/Main.css"
import HeroSection from './HomePage/HeroSection'
import Testimonials from './HomePage/Testimonials'
import About from './HomePage/About'
import HighLights from './HomePage/HighLights'

const Main = () => {
  return (
    <div className='mainSection'>
      <HeroSection/>
      <HighLights/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default Main