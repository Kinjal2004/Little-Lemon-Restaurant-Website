import React from 'react'
import css from "./Testimonials.css"
import personImage from "../../../assets/person1.jpg"
import {BsStarHalf, BsStarFill} from "react-icons/bs"

const Testimonials = () => {
  return (
    <section className='section testimonialSection'>
      <div className='container grid-container testimonials'>
        <h2 className='TestimonialsHeading mainSubHeading'>What people say about us!</h2>
        <div className='TestimonialsList'>
          <article className='testimonialCard'>
            <img className="testimonialImage" src={personImage} alt="error" />
            <span className='testimonialTitle'>Allen Chodu</span>
            <span className='testimonialRating'><BsStarFill/>
            <BsStarFill/><BsStarFill/><BsStarFill/></span>
            <p className='testimonialText'>"The food was decent, but waitress are hot 
              here strongly suggest the place."
            </p>
          </article>
          <article className='testimonialCard'>
            <img className="testimonialImage" src={personImage} alt="error" />
            <span className='testimonialTitle'>Allen Chodu</span>
            <span className='testimonialRating'><BsStarFill/>
            <BsStarFill/><BsStarFill/><BsStarFill/></span>
            <p className='testimonialText'>"The food was decent, but waitress are hot 
              here strongly suggest the place."
            </p>
          </article>
          <article className='testimonialCard'>
            <img className="testimonialImage" src={personImage} alt="error" />
            <span className='testimonialTitle'>Allen Chodu</span>
            <span className='testimonialRating'><BsStarFill/>
            <BsStarFill/><BsStarFill/><BsStarFill/></span>
            <p className='testimonialText'>"The food was decent, but waitress are hot 
              here strongly suggest the place."
            </p>
          </article>
          <article className='testimonialCard'>
            <img className="testimonialImage" src={personImage} alt="error" />
            <span className='testimonialTitle'>Allen Chodu</span>
            <span className='testimonialRating'><BsStarFill/>
            <BsStarFill/><BsStarFill/><BsStarFill/></span>
            <p className='testimonialText'>"The food was decent, but waitress are hot 
              here strongly suggest the place."
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Testimonials