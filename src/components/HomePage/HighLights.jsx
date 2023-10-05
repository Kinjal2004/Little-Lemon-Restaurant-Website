import React from 'react'
import css from "./HighLights.css"
import articleImage from "../../assets/greek salad.jpg"
import {MdDeliveryDining} from "react-icons/md"

const HighLights = () => {
  return (
    <div className='SecContainer'>
        <section className='highlights'>
            <div className='highlightsHead'>
                <span className="mainSubHeading headText grdItGoLeft">This Week's Specials!</span>
                <button className="mainBtn grdItGoRight">Online Menu</button>
            </div>
            <div className='specialsList'>
                <article className='articleCard'>
                    <img id='articleImage' src={articleImage} alt="error" />
                    <div className='detailsContainer' id='detailsContainer'>
                        <span className='cardTile' id='articleName'>Greek Salad</span>
                        <span className='costText' id='articlePrice'>$ 12.99</span>
                        <p className='paragraphText' id='articleDetails'>
                            The famous greek salad of crispy lettuce, 
                            peppers, olives, and Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='deliveryBtn' id='articleBtn'>Order a Delivery<MdDeliveryDining className='articleDeliveryIcon'/></button>
                    </div>
                </article>
                <article className='articleCard'>
                    <img id='articleImage' src={articleImage} alt="error" />
                    <div className='detailsContainer' id='detailsContainer'>
                        <span className='cardTile' id='articleName'>Greek Salad</span>
                        <span className='costText' id='articlePrice'>$ 12.99</span>
                        <p className='paragraphText' id='articleDetails'>
                            The famous greek salad of crispy lettuce, 
                            peppers, olives, and Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='deliveryBtn' id='articleBtn'>Order a Delivery<MdDeliveryDining className='articleDeliveryIcon'/></button>
                    </div>
                </article>
                <article className='articleCard'>
                    <img id='articleImage' src={articleImage} alt="error" />
                    <div className='detailsContainer' id='detailsContainer'>
                        <span className='cardTile' id='articleName'>Greek Salad</span>
                        <span className='costText' id='articlePrice'>$ 12.99</span>
                        <p className='paragraphText' id='articleDetails'>
                            The famous greek salad of crispy lettuce, 
                            peppers, olives, and Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='deliveryBtn' id='articleBtn'>Order a Delivery<MdDeliveryDining className='articleDeliveryIcon'/></button>
                    </div>
                </article>
            </div>
        </section>
    </div>
  )
}

export default HighLights