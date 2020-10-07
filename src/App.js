import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainrouter from './components/Router/Mainrouter';
import { BrowserRouter } from 'react-router-dom';
import Footer from './utility/Footer';
import { bgColor } from './utility/Theme';

function App() {
  return (
    <BrowserRouter>
      <div className='App-Container'>
        <Navbar />
        <div className='content-wrapper' style={{ backgroundColor: bgColor }}>
          <Mainrouter />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
