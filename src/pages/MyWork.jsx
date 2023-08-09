import React from 'react'
// images
import shofipy from "../images/assets/shofipy.jpg"
import chattapp from "../images/assets/chattapp.jpg"
import craps from "../images/assets/craps.png"
import cal from "../images/assets/calculator.png"
// Import styled components
import { Work, Project, Hide, Framer1, Framer2, Framer3, Framer4 } from '../styles/style'
// Import Animation
import { motion } from "framer-motion"
import { slider, sliderContainer, pageAnimation, paraAnimation, photoAnimation, lineAnimation } from '../Animations/PageAnimation';

import { Link } from "react-router-dom"
const MyWork = () => {
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Framer1 variants={slider}></Framer1>
        <Framer2 variants={slider}></Framer2>
        <Framer3 variants={slider}></Framer3>
        <Framer4 variants={slider}></Framer4>
      </motion.div>
      <Project>
        <motion.h2 variants={paraAnimation}  >The Shofipy</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/shopify">
          <Hide>
            <motion.img variants={photoAnimation} src={shofipy} alt="shofipy" />
          </Hide>
        </Link>
      </Project>

      <Project>
        <h2>The Chat Application</h2>
        <div className="line"></div>
        <Link to="/work/chatapp">
          <img src={chattapp} alt="chattapp" />
        </Link>
      </Project>

      <Project>
        <h2>Craps Game</h2>
        <div className="line"></div>
        <Link to="/work/craps">
          <img src={craps} alt="craps" />
        </Link>
      </Project>

      <Project>
        <h2>JQuery Calculator</h2>
        <div className="line"></div>
        <Link to="/work/calculator">
          <img src={cal} alt="calculator" />
        </Link>
      </Project>
    </Work>
  )
}
export default MyWork