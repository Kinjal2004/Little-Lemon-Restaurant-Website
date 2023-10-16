import React, { useState, useReducer } from 'react'
import css from "./BookingPage.css"
import {useNavigate } from 'react-router-dom'
import BookingForm from './BookingPage/BookingForm'

const TableReservation = () => {
    const [booking, setBooking] = useState({
        date: "",
        time: "",
        guest: "",
        occasion: ""
    })
    
    /* reducer for available booking slot times */
    const updateTimes = (state, action) => {
        if(action.type === 'reduce_time') return (
            state.filter((value) => value !== action.payload)
            )
        return state;
    }

    const initializeTimes = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00" ,"22:00"]

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)  

    const timeSlots = () => {
        const slots = availableTimes.map((slot, index) => (
            <option key={index} value={slot}
            onClick={(e) => { if(booking.time) {
                dispatch({type: 'reduce_time', payload: e.target.value})
            }}}
            >{slot}</option>
        ))
        return slots;
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(booking);
        navigate('/booking-confirmed')
    }

    const handleUpdate = (type, data) => {
        const tempState = {...booking, [type]: data};
        setBooking(tempState);
    }

  return (
    <>
    <section className='section res-heading-sec'>
        <div className='container grid-container res-container'>
            <h1 className='res-heading'>Table Reservation</h1>
        </div>
    </section>
    <BookingForm handleUpdate={handleUpdate} 
        handleSubmit={handleSubmit}
        timeSlots={timeSlots}
        booking={booking}/>
    </>
  )
}

export default TableReservation