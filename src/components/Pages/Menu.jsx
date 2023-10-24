import React from 'react'
import css from "./Menu.css"
import Table1 from "../../assets/table1.avif"
import DishCard from './Page-components/DishCard'
import MenuDishes from '../../data/Menu.json'


const Menu = () => {
    /* render products article */
    const renderDish = (category) => {
        return (
            <div className='menuPart'>
                <div className='menuPartTitle'>
                    <h2>{category}</h2>
                </div>
                <div className='menu-list'>
                {MenuDishes.map((MenuDish, index) => {
                if(MenuDish['category'] === category) {
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
        )
    }

  return (
  <>
    <section className='section menu-head'>
        <div className='container grid-container menu-top'>
            <img className='page-main-image' src={Table1} alt="error" />
            <div>
                <div>
                    <h1>Our Menu</h1>
                </div>
                <p className='text-white' >
                    Celebrate the vibrant flavors of the Mediterranean, 
                    where every dish is a journey through sun-soaked landscapes and 
                    time-honored traditions. Experience a symphony of taste that 
                    transports you to the shores of the Mediterranean Sea, 
                    one exquisite bite at a time.
                </p>
            </div>
        </div>
    </section>
    <section className='section'>
        <div className='container grid-container'>
            {renderDish('Entrees')}
            {renderDish('Appetizers')}
            {renderDish('Desserts')}
        </div>
    </section>
  </>
  )
}

export default Menu