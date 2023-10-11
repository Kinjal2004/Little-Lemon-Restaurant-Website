import logo from './logo.svg';
import './App.css';
import Header from './components/Global/Header';
import Home from './components/Pages/Home';
import Footer from './components/Global/Footer';
import {Routes, Route} from "react-router-dom"
import TableReservation from './components/Pages/TableReservation';
import UnderConstruction from './components/Pages/UnderConstruction';

function App() {
  return (
    <div className='app'>
    <Header/>
    <Routes>
      <Route path='/UnderConstruction' element={<UnderConstruction/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/TableReservation' 
      element={<TableReservation/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
