import React from 'react'
import css from "../stylesForComponents/Main.css"
import HeroSection from './HomePage/HeroSection'
import Testimonials from './HomePage/Testimonials'

const Main = () => {
  return (
    <div className='main'>
      <HeroSection/>
      <Testimonials/>
    </div>
  )
}

export default Main