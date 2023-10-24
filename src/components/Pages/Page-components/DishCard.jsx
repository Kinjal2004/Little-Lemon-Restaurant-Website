import React from 'react'
import css from './DishCard.css'
import {MdDeliveryDining} from "react-icons/md"

const DishCard = ({ dishImage, dishName, dishPrice, dishDetails }) => {
  return (
    <div>
        <article className='DishCard'>
                <img className='DishImage' src={dishImage} alt="error" />
                <div className='DishDetails'>
                    <span className='cardTile DishTitle'>{dishName}</span>
                    <span className='costText DishCost'>$ {dishPrice}</span>
                    <p className='paragraphText DishText' >
                        {dishDetails}
                    </p>
                    <button className='deliveryBtn DishBtn'>Order a Delivery<MdDeliveryDining className='DishDeliveryIcon'/></button>
                </div>
            </article>
    </div>
  )
}

export default DishCard