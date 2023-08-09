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
// import home2 from "../images/home2.jpg"
import styled from 'styled-components'
import ChartD from './Chart'
const ServicesSection = () => {
     return (
          <Service className="container">
               <div className='description text-center m-5'>
                    <div className="row g-4">
                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={react} alt="react" />
                                   <div className="card-body">
                                        <h4 className="card-title">React JS</h4>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={javascript} alt="JS" />
                                   <div className="card-body">
                                        <h4 className="card-title">JavaScript</h4>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={mongodb} alt="database" />
                                   <div className="card-body">
                                        <h4 className="card-title">Mongo DB</h4>
                                   </div>
                              </div>
                         </div>
                         <Line className='line'></Line>

                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={mysql} alt="mysql" />
                                   <div className="card-body">
                                        <h4 className="card-title">MYSQL</h4>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={nodejs} alt="nodejs" />
                                   <div className="card-body">
                                        <h4 className="card-title">Node JS</h4>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={python} alt="python" />
                                   <div className="card-body">
                                        <h4 className="card-title">Python</h4>
                                   </div>
                              </div>
                         </div>
                         <Line className='line'></Line>

                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={postman} alt="postman" />
                                   <div className="card-body">
                                        <h4 className="card-title">Postman</h4>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={material} alt="material" />
                                   <div className="card-body">
                                        <h4 className="card-title">Material UI</h4>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <img className="card-img" src={github} alt="github" />
                                   <div className="card-body">
                                        <h4 className="card-title">Github</h4>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="chart container w-75 bg-light fw-bold">
                    <ChartD />
               </div>

          </Service>
     )
}
const Service = styled.div`
     padding: 5rem 5rem;
`
const Line = styled.line`
      height: 0.5rem;
      /* background: #23d997; */
      margin: 2rem 0rem;
      width: 100%;
`;

export default ServicesSection
