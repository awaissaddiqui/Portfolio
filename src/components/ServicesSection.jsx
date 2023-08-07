import React from 'react'
// import icons
import react from "../images/react.svg"
import javascript from "../images/JS.svg"
import mongodb from "../images/mongodb.svg"
import mysql from "../images/mysql.svg"
import nodejs from "../images/nodejs.svg"
import python from "../images/python.svg"
import postman from "../images/postman.svg"
import material from "../images/materialui.svg"
import github from "../images/github.svg"
import home2 from "../images/home2.jpg"
import styled from 'styled-components'

const ServicesSection = () => {
     return (
          <Service className="container">
               <div className='description text-center'>
                         <div className="row g-5 ">
                              {/* React */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={react} alt="React Framwork" />
                                        <h4>React</h4>
                                   </div>
                              </div>
                              {/* JavaScript */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={javascript} alt="JavaScript" />
                                        <h4>JavaScript</h4>
                                   </div>
                              </div>
                              {/* Mongodb */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={mongodb} alt="mongodb" />
                                        <h4>Mongodb</h4>
                                   </div>
                              </div>
                         </div>

                         <div className="row g-5">
                              {/* MySQL */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={mysql} alt="mysql" />
                                        <h4>MySQL</h4>
                                   </div>
                              </div>
                              {/* Node JS */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={nodejs} alt="nodejs" />
                                        <h4>Node JS</h4>
                                   </div>
                              </div>

                              {/* Python */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={python} alt="python" />
                                        <h4>Python Programming</h4>
                                   </div>
                              </div>
                         </div>
                         <div className="row g-5 " >

                              {/* Postman API */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={postman} alt="postman" />
                                        <h4>Postman API</h4>
                                   </div>
                              </div>

                              {/* Marterial UI*/}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={material} alt="material" />
                                        <h4>Material UI</h4>
                                   </div>
                              </div>
                              {/* GitHub */}
                              <div className="col-sm-4">
                                   <div className="icon">
                                        <img src={github} alt="github" />
                                        <h4>GitHub</h4>
                                   </div>
                              </div>
                         </div>
                    <div className="home">
                         <img src={home2} alt="home2" />
                    </div>
               </div>
          </Service>
     )
}
const Service = styled.div`
     padding: 5rem 5rem;
`
export default ServicesSection
