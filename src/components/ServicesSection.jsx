import React,{useEffect} from "react";
// Import AOS (Animate on Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// import icons
import react from "../images/react.svg";
import javascript from "../images/JS.svg";
import mongodb from "../images/mongodb.svg";
import mysql from "../images/mysql.svg";
import nodejs from "../images/nodejs.svg";
import python from "../images/python.svg";
import postman from "../images/postman.svg";
import material from "../images/materialui.svg";
import github from "../images/github.svg";

// import home2 from "../images/home2.jpg"
import styled from "styled-components";
import ChartD from "./Chart";
import ScrolTop from "./ScrolTop";

// Import Animation
import { pageAnimation,titleAnimation } from "../Animations/PageAnimation";
import { motion } from "framer-motion";


const ServicesSection = () => {
     useEffect(()=>{
          AOS.init();
     },[])

     return (
          <>
               <Service
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="container"
               >
                <motion.h2 variants={titleAnimation}>TECH I'M FAMILIAR WITH</motion.h2>
                    <div className="description text-center m-5">
                         <div className="row">
                              <div className="col-sm-4">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={react} alt="react developer" />
                                        <div className="card-body">
                                             <h4 className="card-title">React JS</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <div className="col-sm-4">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={javascript} alt="JavaScript developer" />
                                        <div className="card-body">
                                             <h4 className="card-title">JavaScript</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <div className="col-sm-4">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={mongodb} alt="mongodb developer" />
                                        <div className="card-body">
                                             <h4 className="card-title">Mongo DB</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              {/* Apply animations */}
                              <Line2 className="line"></Line2>

                              <div className="col-sm-4">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={mysql} alt="mysql database" />
                                        <div className="card-body">
                                             <h4 className="card-title">MYSQL</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <div className="col-sm-4">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={nodejs} alt="nodejs developer" />
                                        <div className="card-body">
                                             <h4 className="card-title">Node JS</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <div className="col-sm-4">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={python} alt="python programmer" />
                                        <div className="card-body">
                                             <h4 className="card-title">Python</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <Line2 className="line"></Line2>

                              <div className="col-sm-4" data-aos="flip-right">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={postman} alt="postman api" />
                                        <div className="card-body">
                                             <h4 className="card-title">Postman</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <div className="col-sm-4" data-aos="flip-right">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={material} alt="material ui design" />
                                        <div className="card-body">
                                             <h4 className="card-title">Material UI</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <div className="col-sm-4" data-aos="flip-right">
                                   <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="card"
                                   >
                                        <img className="card-img" src={github} alt="github" />
                                        <div className="card-body">
                                             <h4 className="card-title">Github</h4>
                                        </div>
                                   </motion.div>
                              </div>
                              <Line2 className="line"></Line2>
                         </div>
                    </div>
                    <motion.div
                         whileTap={{ scale: 0.8 }}
                         whileHover={{ scale: 1.1 }}
                         className="chart container w-75 bg-light fw-bold" 
                         data-aos="flip-right"
                    >
                         <ChartD  />
                    </motion.div>
                    <ScrolTop />
               </Service>
          </>
     );
};
const Service = styled(motion.div)`
  padding: 5rem 5rem;
  h2{
     padding-left: 3rem;
     color: white;
  }
  
  @media (max-width: 728px){
               .col-sm-4{
               width: 30%;
               padding: 1rem 1rem;
               margin: 2rem 0rem;
               margin-bottom: 2rem;
          }
     }

`;
const Line2 = styled.line`
  height: 0.5rem;
  background: #23d997; 
  margin: 2rem 1rem;
  width: 97%;
  @media (max-width: 576px){
     width: 85%;
     }
`;


export default ServicesSection;
