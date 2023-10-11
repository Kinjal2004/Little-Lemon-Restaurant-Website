import React, { useState } from 'react'
import css from "./TableReservation.css"

const TableReservation = () => {
    const [resData, setResData] = useState([
        
    ])

  return (
    <>
    <section className='section res-heading-sec'>
        <div className='container grid-container res-container'>
            <h1 className='res-heading'>Table Reservation</h1>
        </div>
    </section>
    <section className='section'>
        <div className='container grid-container res-container'>
            <form className='res-form' action="">
                <div className='res-part'>
                    <label className="res-text" htmlFor="res-date">Date</label>
                    <input className="res-input" type="date" id='res-date' />
                </div>
                <div className='res-part'>
                    <label className="res-text" htmlFor="res-time">Time</label>
                    <select className="res-input" id="res-time">
                        <option value="">17:00</option>
                        <option value="">18:00</option>
                        <option value="">19:00</option>
                        <option value="">20:00</option>
                        <option value="">21:00</option>
                        <option value="">22:00</option>
                    </select>
                </div>
                <div className='res-part'>
                    <label className="res-text" htmlFor="res-guest">Number of guest</label>
                    <input className="res-input" type="number" id="guest" placeholder='1' min='1' max='10'/>
                </div>
                <div className='res-part'>
                    <label className="res-text" htmlFor="res-occasion">Occasion</label>
                    <select className="res-input" name="" id="res-occasion">
                        <option value="">Birthday</option>
                        <option value="">Anniversary</option>
                    </select>
                </div>
                <input className="mainBtn res-btn" type="submit" value='Make your reservation' />
            </form>
        </div>
    </section>
    </>
  )
}

export default TableReservation