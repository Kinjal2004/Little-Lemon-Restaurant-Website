import React from 'react'
import css from "./Menu.css"
import DishCard from './Page-components/DishCard'
import MenuDishes from '../../data/Menu.json'


const Menu = () => {
    /* render products article */
  return (
  <>
    <section className='section menu-head'>
        <div className='container grid-container menu-center'>
            <h1>Menu</h1>
        </div>
    </section>
    <section className='section'>
        <div className='container grid-container menu-list MenuList'>
            {MenuDishes.map((MenuDish, index) => (
                <DishCard
                    key={index}
                    dishImage={MenuDish['dish-image']}
                    dishName={MenuDish['dish-name']}
                    dishPrice={MenuDish['dish-price']}
                    dishDetails={MenuDish['dish-details']}
                />
            ))}
        </div>
    </section>
  </>
  )
}

export default Menu