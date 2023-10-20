import {React, useEffect, useReducer, useState} from 'react'
import {useNavigate, Routes, Route} from "react-router-dom"
import Home from '../../components/Pages/Home';
import BookingForm from '../Pages/BookingForm';
import UnderConstruction from '../../components/Pages/UnderConstruction';
import BookingConfirmed from '../../components/Pages/BookingConfirmed';
import Menu from '../../components/Pages/Menu'

const Main = () => {
    /* selected time state */
    const [selectedTime, setSelectedTime] = useState("");

    /* Booking State */
    const [bookingData, setBookingData] = useState(
        [
            {
                date: "2023-10-20", 
                timeSlots:[
                    {
                        slotTime: "16:00",
                        guest: "4",
                        occasion: "Birthday" 
                    },
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
    const fetchAPI = (targetDate) => {
        console.log(targetDate)
        let result = [];
        for (const booking of bookingData) {
            if (booking.date === targetDate.toString()) {
                for (let i = 16; i <= 21; i++ ) {
                    let count = 0;
                    const slot = i+ ":00"
                    for (const timeSlot of booking.timeSlots) {
                        if (timeSlot.slotTime === slot) {
                            count++;
                            break;
                        }
                    }
                    if (count === 0) {
                        result.push(slot);
                    }
                }
            } else {
                for (let i = 16; i <= 21; i++) {
                    const slot = i + ":00"
                    result.push(slot);
                }
            }
        }
        return result;
    }
    /* end of func */

    
    const submitAPI = (formData) => {}
    
    /* reducer for available booking slot times */
    const navigate = useNavigate();
    const reducer = (state, action) => {
        if(action.type === 'reduce_time') {
            return (
                state.filter((value) => value !== action.payload)
                )
        }
        if (action.type === 'update_available_time') {
            const updatedSlots = fetchAPI(selectedTime)
            return updatedSlots;
        }
            return state;
        }
        
        
        const initializeTimes = fetchAPI(selectedTime)
        
        const [availableTimes, dispatch] = useReducer(reducer, initializeTimes) 
        
        const updateTimes = (value) => {
            dispatch({type: 'reduce_time', payload: value})
        }

        /* handleSelectedTime that user currently selected in field */
        const handleSelectedTime = (givenTime) => {
            setSelectedTime(givenTime);
            dispatch({type: 'update_available_time'})
            console.log(availableTimes)
            console.log(selectedTime)
        }
        /* end of func */
        
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
                handleSelectedTime={handleSelectedTime}
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
