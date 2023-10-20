import {React, useEffect, useReducer, useState} from 'react'
import {useNavigate, Routes, Route} from "react-router-dom"
import Home from '../../components/Pages/Home';
import BookingForm from '../Pages/BookingForm';
import UnderConstruction from '../../components/Pages/UnderConstruction';
import BookingConfirmed from '../../components/Pages/BookingConfirmed';
import Menu from '../../components/Pages/Menu'

const Main = () => { 
    /* Booking State */
    const [bookingData, setBookingData] = useState(
        [
            {
                date: "20/10/2023", 
                timeSlots:[
                    {
                        slotTime: "20:00",
                        guest: "4",
                        occasion: "Birthday" 
                    },
                    {
                        slotTime: "21:00",
                        guest: "3",
                        occasion: "Anniversary"
                    }
                ]
            }
        ]);

    /* Fetch API functions */
    const fetchAPI = (date) => {
        
    }
    
    const submitAPI = (formData) => {}
    
    /* reducer for available booking slot times */
    const navigate = useNavigate();
    const reducer = (state, action) => {
        if(action.type === 'reduce_time') return (
            state.filter((value) => value !== action.payload)
            )
        return state;
    }

    const initializeTimes = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00" ,"22:00"]


    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes) 
    
    const updateTimes = (value) => {
        dispatch({type: 'reduce_time', payload: value})
    }

    const slotTimes = () => {
        const slots = availableTimes.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
        ))
        return slots;
    } 

  return (
    <main className='main'>
        <Routes>
            <Route path='/UnderConstruction' element={<UnderConstruction/>} />
            <Route path='/Menu' element={<Menu/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/booking-confirmed' element={<BookingConfirmed/>} />
            <Route path='/BookingForm' 
            element={<BookingForm 
                availableTimes={availableTimes} 
                updateTimes={updateTimes} 
                slotTimes={slotTimes}
                navigate={navigate}
                setBookingData={setBookingData}
                />} />
        </Routes>
    </main>
  )
}

export default Main;
