import React from 'react'
import home1 from "../images/home1.jpeg"
const AboutSection = () => {
  return (
    <div>
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>We work to make </h2>
        </div>
        <div className="hide">
          <h2>your <span>dreams</span> come </h2>
        </div>
        <div className="hide">
          <h2>true</h2>
        </div>
      </div>
      <p>We are providing an amazing skills .
         Please contact us for professional work</p>
         <button>Contact Us</button>
         <div className="image">
      <img src={home1} alt="home1" />
         </div>
    </div>
    </div>
  )
}

export default AboutSection