import React from 'react'
import css from "./Testimonials.css"
import TestimonialCard from '../Page-components/TestimonialCard'
import TestimonialData from '../../../data/TesimonialData.json'

const Testimonials = () => {
  return (
    <section className='section testimonialSection'>
      <div className='container grid-container testimonials'>
        <h2 className='TestimonialsHeading mainSubHeading'>What people say about us!</h2>
        <div className='TestimonialsList'>
          {TestimonialData.map((Testimonial, index) => (
            <TestimonialCard
              key={index}
              personName={Testimonial["name"]}
              personImage={Testimonial["image"]}
              personRating={Testimonial["rating"]}
              personReview={Testimonial["review"]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials