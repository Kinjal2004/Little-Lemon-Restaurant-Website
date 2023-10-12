import React, { useState } from 'react'
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
        handleSubmit={handleSubmit}/>
    </>
  )
}

export default TableReservation