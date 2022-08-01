import React from 'react'
import "../css/homepage.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
    faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomePage = () => {
  return (
      <div>
          <div className='second'>
              SECOND INNINGS
          </div>
          <div className='sports'>
              SPORTS 
              <div className='and'>
                  AND
              </div>
          </div>
          <div className='enter'>
              ENTERTAINMENT
          </div>
          <div className='follow'>
              <p>Follow Us on</p>
              <div className='social'>
              <div className='youtube'>
               <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
                  >
                      
          <FontAwesomeIcon icon={faYoutube} size="1x" />
                  </a>
              </div>
              <div className='facebook'>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" />
                  </a>
              </div>
              <div className='insta'>
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x"color='rgb(51, 197, 25,0.7)' />
                  </a>
              </div>
              <div className='twitter'>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="1x"color='rgb(51, 197, 25,0.7)' />
                  </a>
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default HomePage