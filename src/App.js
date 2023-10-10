import logo from './logo.svg';
import './App.css';
import Header from './components/Global/Header';
import Home from './components/Pages/Home';
import Footer from './components/Global/Footer';

function App() {
  return (
    <div className='app'>
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
