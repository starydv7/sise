import React from 'react'
import "../css/navbar.css";
import HomePage from './HomePage';
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
      <div>
      <div className='navbar'>
        <div className='navbar1'> 
          <img src='http://www.sise.in/images/logo.png' />
          <div className='navbar2'>
           <Link to=""></Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/talent">TALENT MANAGEMENT</Link>
            <Link to="/digital">DIGITAL MARKETING</Link>
            <Link to="/sponser">SPONSERSHIP SALES AND BRANDING</Link>
      <Link to="/music">MUSIC</Link>
      <Link to="/contact">CONTACT</Link>
          </div>
        </div>
          
      </div> 
        <HomePage/>
    </div>
  )
}

export default Navbar