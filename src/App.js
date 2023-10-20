import css from './App.css';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Main from "./components/Global/Main";

function App() {
  return (
    <div className='app'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;