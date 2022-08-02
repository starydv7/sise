import React,{useState} from 'react'
import "../css/about.css";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
const About = () => {
  return (
      <div>
          <div className='about'>ABOUT US</div>
          <div>
                  <p className='para'>
        <ReadMore>
                      Establish by Rudradeep Banerjee & Rwittika Kahtua in 2014,SISE represents some
                      <br></br>
                      of the biggest & most renowed brands in the sports and entainement business..
                      Second Innings Sports and Entertainment (SISE) <br></br>is a Media Agency based out of
                      Kolkata which was founded in the April of 2014. What started out as a 2 member
        </ReadMore>
      </p>
          </div>
        
    </div>
  )
}

export default About