import logo from './logo.svg';
import './App.css';
import Header from './components/Global/Header';
import Home from './components/Pages/Home';
import Footer from './components/Global/Footer';
import {Routes, Route} from "react-router-dom"
import BookingPage from './components/Pages/BookingPage';
import UnderConstruction from './components/Pages/UnderConstruction';
import BookingConfirmed from './components/Pages/BookingConfirmed';

function App() {
  return (
    <div className='app'>
    <Header/>
    <Routes>
      <Route path='/UnderConstruction' element={<UnderConstruction/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/booking-confirmed' element={<BookingConfirmed/>} />
      <Route path='/BookingPage/*' 
      element={<BookingPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
