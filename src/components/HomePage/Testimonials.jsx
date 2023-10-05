import React from 'react'
import css from "./Testimonials.css"
import personImage from "../../assets/person1.jpg"

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <span className='TestimonialsHeading mainHeading'>Testimonials</span>
      <ul className='TestimonialsList'>
        <li id='testimonialCard'>
          <img id="cardImage" src={personImage} alt="error" />
          <span className='cardTile' id='cardName'>Allen Chodu</span>
          <span id='cardRating'>rating</span>
          <p className='paragraphText' id='cardReview'>The food was decent, but waitress are hot 
            here strongly suggest the place.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Testimonials