import React from 'react'
import css from "./HighLights.css"
import articleImage from "../../../assets/greek salad.jpg"
import {MdDeliveryDining} from "react-icons/md"
import { Link } from 'react-router-dom'

const HighLights = () => {
  return (
    <section className='section'>
        <div className='container grid-container highlights'>
            <div className='highlightsHead'>
                <h2 className="mainSubHeading headText grdItGoLeft">This Week's Specials!</h2>
                <Link to="/UnderConstruction">
                    <button className="mainBtn grdItGoRight">Online Menu</button>
                </Link>
            </div>
            <div className='specialsList'>
                <article className='articleCard'>
                    <img className='articleImage' src={articleImage} alt="error" />
                    <div className='articleDetails'>
                        <span className='cardTile articleTitle'>Greek Salad</span>
                        <span className='costText articleCost'>$ 12.99</span>
                        <p className='paragraphText articleText' >
                            The famous greek salad of crispy lettuce, 
                            peppers, olives, and Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='deliveryBtn articleBtn'>Order a Delivery<MdDeliveryDining className='articleDeliveryIcon'/></button>
                    </div>
                </article>
                <article className='articleCard'>
                    <img className='articleImage' src={articleImage} alt="error" />
                    <div className='articleDetails'>
                        <span className='cardTile articleTitle'>Greek Salad</span>
                        <span className='costText articleCost'>$ 12.99</span>
                        <p className='paragraphText articleText' >
                            The famous greek salad of crispy lettuce, 
                            peppers, olives, and Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='deliveryBtn articleBtn'>Order a Delivery<MdDeliveryDining className='articleDeliveryIcon'/></button>
                    </div>
                </article>
                <article className='articleCard'>
                    <img className='articleImage' src={articleImage} alt="error" />
                    <div className='articleDetails'>
                        <span className='cardTile articleTitle'>Greek Salad</span>
                        <span className='costText articleCost'>$ 12.99</span>
                        <p className='paragraphText articleText' >
                            The famous greek salad of crispy lettuce, 
                            peppers, olives, and Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='deliveryBtn articleBtn'>Order a Delivery<MdDeliveryDining className='articleDeliveryIcon'/></button>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default HighLights