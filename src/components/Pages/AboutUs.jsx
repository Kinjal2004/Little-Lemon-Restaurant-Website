import React from 'react'
import css from './AboutUs.css'
import aboutUsMainImage from '../../assets/aboutus1.jpg'
import aboutUsImage2 from '../../assets/aboutus2.jpg'
import aboutUsImage3 from '../../assets/Mario and Adrian b.jpg'

const AboutUs = () => {
  return (
    <>
    <section className='section aboutUsSection'>
        <div className='container grid-container aboutUsContainer'>
            <div>
                <div>
                    <h1>Discover Our Mediterranean Journey</h1>
                    <h2 className='text-white'>Where Flavors Meet Tradition, and Every Meal Tells a Story.</h2>
                </div>
            </div>
            <img className='page-main-image' src={aboutUsMainImage} alt="error" />
        </div>
    </section>
    <section className='section aboutSections'>
        <div className='container'>
            <img className='page-main-image aboutSecondImage' src={aboutUsImage2} alt="error" />
            <div>
                <p>
                <span className='bigBold'>At</span> Little Lemon, we believe that the 
                heart of every great meal lies in 
                the harmony of flavors, the warmth of 
                tradition, and the joy of sharing. 
                Our culinary journey began with a deep 
                appreciation for the Mediterranean's 
                rich tapestry of tastes and cultures. 
                From the sun-drenched coasts of Greece 
                to the bustling spice markets of Turkey, 
                we've embarked on a voyage to bring you a 
                dining experience that is not just about 
                food but a celebration of life, love, 
                and connection. Our kitchen is a melting 
                pot of family recipes passed down through 
                generations, combined with a modern twist 
                that caters to the diverse and evolving 
                palates of our cherished guests. 
                Our commitment to using fresh, locally-sourced 
                ingredients and time-honored cooking 
                techniques ensures that each dish that 
                leaves our kitchen is a piece of art, 
                a reflection of the Mediterranean's spirit. 
                Whether you're joining us for a cozy dinner, 
                a celebration, or a casual gathering 
                with friends, we invite you to embark 
                on a culinary adventure with us and savor 
                the flavors of our heritage, for each meal 
                at Little Lemon tells a story - 
                a story of tradition, passion, and the 
                timeless beauty of the Mediterranean.
                </p>
            </div>
        </div>
    </section>
    <section className='section aboutSections'>
        <div className='container'>
            <img className='page-main-image aboutThirdImage' 
            src={aboutUsImage3} alt="error" />
            <div>
                <p className='aboutThirdPara'><span className='bigBold'>In</span> 
                the heart of Chicago, Illinois, 
                where the city's rich tapestry of cultures 
                converge, there stands a family-owned 
                restaurant that has been a labor of love 
                for two brothers, Mario and Adrian. 
                These two Italian siblings embarked on a 
                culinary journey, fueled by their passion 
                for tradition and the desire to share the 
                vibrant flavors of the Mediterranean. 
                Born into a family where food was a way of life, 
                their roots run deep in Italian heritage, 
                but their curiosity led them to explore 
                the diverse tastes of Greece and Turkey. 
                The result is a restaurant that serves up a 
                delectable fusion of Italian, Greek, and 
                Turkish cuisine, where each dish is a 
                celebration of their shared experiences 
                and a testament to their commitment to 
                quality and authenticity. At the heart of 
                the bustling city, this family-owned gem is 
                a testament to the power of tradition, family,
                 and the universal language of exceptional food. 
                 Welcome to our culinary haven, where the 
                 flavors of the Mediterranean come to life 
                 in the heart of Chicago.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs