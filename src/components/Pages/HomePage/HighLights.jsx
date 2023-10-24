import React from 'react'
import css from "./HighLights.css"
import { Link } from 'react-router-dom'
import DishCard from '../Page-components/DishCard'
import MenuDishes from '../../../data/Menu.json'

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
            <div className='menu-list'>
            {MenuDishes.map((MenuDish, index) => {
                if(MenuDish['special'] === "true") {
                    return (
                        <DishCard
                            key={index}
                            dishImage={MenuDish['dish-image']}
                            dishName={MenuDish['dish-name']}
                            dishPrice={MenuDish['dish-price']}
                            dishDetails={MenuDish['dish-details']}
                        />
                    )
                }
            })}
            </div>
        </div>
    </section>
  )
}

export default HighLights