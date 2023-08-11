import React from 'react';
//import Animations
import { titleAnimation, paraAnimation, photoAnimation } from '../Animations/PageAnimation';
import { motion } from "framer-motion"

//Import Image
import home1 from "../images/home1.png"
//Import Styled Components
import { Home1, Description, Image, Hide } from '../styles/homeStyle'
// Wave
import Wave from './Wave';
const Home = () => {
  return (
    <Home1 >
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>your <span>dreams</span> come </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={paraAnimation}>We are providing an amazing skills .
          Please contact us for professional work</motion.p>
        <motion.button variants={paraAnimation}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation}  src={home1} alt="home1" />
      </Image>
      <Wave/>
    </Home1>
  )
}


export default Home