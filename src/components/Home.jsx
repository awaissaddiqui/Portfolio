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
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigation = useNavigate();
  const buttonClicked=()=>{
    navigation("/contact")
  }
  return (
    <Home1 >
      {/* Elevating Ideas through Code A Journey of Innovation and Creation */}
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>Elevating Ideas through</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>Code A<span>Journey</span> of</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}> Innovation and Creation</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={paraAnimation}>I'm providing an amazing skills .
          Please contact us for professional work.</motion.p>
        <motion.button variants={paraAnimation} onClick={buttonClicked} >Let's Talk</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation}  src={home1} alt="React developer portfolio" />
      </Image>
      <Wave/>
    </Home1>
  )
}


export default Home