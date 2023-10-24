import React from 'react'
import {MdDeliveryDining} from "react-icons/md"

const DishCard = () => {
  return (
    <div>
        <article className='articleCard'>
                <img className='articleImage' src="" alt="error" />
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
  )
}

export default DishCard