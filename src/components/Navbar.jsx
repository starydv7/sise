import React from 'react'
import "../css/navbar.css";
const Navbar = () => {
  return (
      <div>
      <div className='navbar'>
        <div className='navbar1'> 
          <img src='http://www.sise.in/images/logo.png' />
          <div className='navbar2'>
            <div className='btn1'>
               <button>ABOUT</button>
            </div>
            <div className='btn2'>
              <button>TALENT MANAGEMENT</button>
            </div>
            <div className='btn3'>
              <button>DIGITAL MARKRTING</button>
            </div>
            
            <div className='btn4'>
               <button>SPONSORPHIP SALES AND BRANDING</button>
            </div>
            <div className='btn5'>
              <button>MUSIC</button>
           </div>
            <div className='btn6'>
               <button>CONTACT</button>
            </div>
           

          </div>
        </div>
            
          </div>  
    </div>
  )
}

export default Navbar