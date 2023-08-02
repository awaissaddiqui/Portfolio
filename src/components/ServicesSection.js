import React from 'react'
// import icons
import react from "../images/react.svg"
import javascript from "../images/JS.svg"
import mongodb from "../images/mongodb.svg"
import mysql from "../images/mysql.svg"
import nodejs from "../images/nodejs.svg"
import python from "../images/python.svg"
import postman from "../images/postman.svg"
import cplusplus from "../images/cplusplus.svg"
import material from "../images/materialui.svg"
import github from "../images/github.svg"
import home2 from "../images/home2.jpg"

const ServicesSection = () => {
  return (
    <div className="services">
     <div className="description">
          <div className="cards">
               {/* React */}
               <div className="card">
                    <div className="icon">
                         <img src={react} alt="React Framwork" />
                         <h2>React</h2>
                    </div>
               </div>
               {/* JavaScript */}
               <div className="card">
                    <div className="icon">
                         <img src={javascript} alt="JavaScript" />
                         <h2>JavaScript</h2>
                    </div>
               </div>
               {/* Mongodb */}
               <div className="card">
                    <div className="icon">
                         <img src={mongodb} alt="mongodb" />
                         <h2>Mongodb</h2>
                    </div>
               </div>
               {/* MySQL */}
               <div className="card">
                    <div className="icon">
                         <img src={mysql} alt="mysql" />
                         <h2>MySQL</h2>
                    </div>
               </div>
               {/* Node JS */}
               <div className="card">
                    <div className="icon">
                         <img src={nodejs} alt="nodejs" />
                         <h2>Node JS</h2>
                    </div>
               </div>
               {/* Python */}
               <div className="card">
                    <div className="icon">
                         <img src={python} alt="python" />
                         <h2>Python Programming</h2>
                    </div>
               </div>
               {/* Postman API */}
               <div className="card">
                    <div className="icon">
                         <img src={postman} alt="postman" />
                         <h2>Postman API</h2>
                    </div>
               </div>
               {/* C ++ */}
               <div className="card">
                    <div className="icon">
                         <img src={cplusplus} alt="cplusplus" />
                         <h2>C++</h2>
                    </div>
               </div>
               {/* Marterial UI*/}
               <div className="card">
                    <div className="icon">
                         <img src={material} alt="material" />
                         <h2>Material UI</h2>
                    </div>
               </div>
               {/* GitHub */}
               <div className="card">
                    <div className="icon">
                         <img src={github} alt="github" />
                         <h2>GitHub</h2>
                    </div>
               </div>
          </div>
          <div className="home">
               <img src={home2} alt="home2" />
          </div>
     </div>
    </div>
  )
}

export default ServicesSection