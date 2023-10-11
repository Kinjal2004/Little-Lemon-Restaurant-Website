import React, { useState } from 'react'
import css from "./BookingPage.css"
import {useNavigate } from 'react-router-dom'
import BookingForm from './BookingPage/BookingForm'

const TableReservation = () => {
    const [resData, setResData] = useState({
        date: "",
        time: "",
        people: "",
        occasion: ""
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resData);
        navigate('/booking-confirmed')
    }

  return (
    <>
    <section className='section res-heading-sec'>
        <div className='container grid-container res-container'>
            <h1 className='res-heading'>Table Reservation</h1>
        </div>
    </section>
    <BookingForm resData={resData} 
        setResData={setResData} 
        handleSubmit={handleSubmit}/>
    </>
  )
}

export default TableReservation