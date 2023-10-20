import React, { useState} from 'react'
import css from "./BookingForm.css"

const BookingForm = ({updateTimes, slotTimes, navigate}) => {
    const [booking, setBooking] = useState({
        date: "",
        time: "",
        guest: "",
        occasion: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(booking);
        updateTimes(booking.time);
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
    <section className='section'>
            <div className='container grid-container res-container'>
                <form className='res-form' action="">
                    <div className='res-part'>
                        <label className="res-text" htmlFor="res-date">Date</label>
                        <input className="res-input" type="date" id='res-date' 
                        onChange={(e) => handleUpdate("date", e.target.value)}
                        />
                    </div>
                    <div className='res-part'>
                        <label className="res-text" htmlFor="res-time">Time</label>
                        <select className="res-input" id="res-time" value={booking.time}
                        onChange={(e) => handleUpdate("time", e.target.value)}
                        >
                            {slotTimes()}
                        </select>
                    </div>
                    <div className='res-part'>
                        <label className="res-text" htmlFor="res-guest">Number of guest</label>
                        <input className="res-input" type="number" id="guest" 
                        placeholder='1' min='1' max='10'
                        onChange={(e) => handleUpdate("guest", e.target.value)}
                        />
                    </div>
                    <div className='res-part'>
                        <label className="res-text" htmlFor="res-occasion">Occasion</label>
                        <select className="res-input" name="" id="res-occasion"
                        onChange={(e) => handleUpdate("occasion", e.target.value)}
                        >
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <input className="mainBtn res-btn" type="submit" 
                    value='Make your reservation' 
                    onClick={(e) => handleSubmit(e)}
                    />
                </form>
            </div>
        </section>
        </>
  )
}

export default BookingForm