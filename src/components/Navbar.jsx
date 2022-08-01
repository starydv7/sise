import React from 'react'
import "../css/navbar.css";
import HomePage from './HomePage';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Talent from './Talent';
import Digital from './Digital';
import Sponser from './Sponser';
import Music from './Music';
import Contact from './Contact';
const Navbar = () => {
  return (
      <div>
      <div className='navbar'>
        <div className='navbar1'> 
          <img src='http://www.sise.in/images/logo.png' />
          <div className='navbar2'>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path='/about' element={<About />}>About</Route>
              <Route path='/talent'element={<Talent/>}>TALENT MANAGEMENT</Route>
              <Route path='/digital' element={<Digital />}>DIGITAL MARKETING</Route>
              <Route path='/s' element={<Sponser />}>SPONSERSHIP AND BRANDING</Route>
              <Route path='/music' element={<Music />}>MUSIC</Route>
              <Route path='/contact'element={<Contact/>}>CONTACT</Route>
          </Routes>
           

          </div>
        </div>
          
      </div> 
        <HomePage/>
    </div>
  )
}

export default Navbar