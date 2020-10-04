import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Mainrouter from './components/Router/Mainrouter';
import { BrowserRouter } from 'react-router-dom';
// import UseHideOnScroll from './components/UseHideOnScroll';

function App() {

  // let showNavbar = !UseHideOnScroll()

  return (
    <BrowserRouter>
      <div className='App-Container'>
        <Navbar></Navbar>
        <div className='content-wrapper'>
          <Mainrouter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
