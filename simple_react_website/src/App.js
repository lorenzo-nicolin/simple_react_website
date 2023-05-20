// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
// import {Routes, Route} from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Header/>
      

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>

      test1231
      <Footer/>
      
    </div>
  );
}

export default App;
