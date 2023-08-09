import React from 'react';
import { motion } from "framer-motion"
//Import Image
import home1 from "../images/home1.png"
//Import Styled Components
import { Home1, Description, Image, Hide } from '../styles/style'

const Home = () => {
  return (
    <Home1 >
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>your <span>dreams</span> come </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>
        <p>We are providing an amazing skills .
          Please contact us for professional work</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </Home1>
  )
}


export default Home