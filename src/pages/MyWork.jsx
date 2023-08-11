import React from 'react'

// images
import shofipy from "../images/assets/shofipy.jpg"
import chattapp from "../images/assets/chattapp.jpg"
import craps from "../images/assets/craps.png"
import cal from "../images/assets/calculator.png"

// Import styled components
import { Work, Project, Hide, Framer1, Framer2, Framer3, Framer4 } from '../styles/myWorkStyles'
import ScrolTop from '../components/ScrolTop'

// Import Animation
import { motion } from "framer-motion"
import { slider, sliderContainer, pageAnimation, paraAnimation, photoAnimation, lineAnimation, scrollReveal } from '../Animations/PageAnimation';
import { useScroll } from '../components/UseScroll'
import { Link } from "react-router-dom"
const MyWork = () => {
  const [element1, controls1]= useScroll();
  const [element2, controls2]= useScroll();
  const [element3, controls3]= useScroll();
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

      <Project variants={scrollReveal} ref={element1} initial="hidden" animate={controls1} >
        <h2>The Chat Application</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/chatapp">
          <img src={chattapp} alt="chattapp" />
        </Link>
      </Project>

      <Project variants={scrollReveal} ref={element2} initial="hidden" animate={controls2}>
        <h2>Craps Game</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/craps">
          <img src={craps} alt="craps" />
        </Link>
      </Project>

      <Project variants={scrollReveal} ref={element3} initial="hidden" animate={controls3}>
        <h2>JQuery Calculator</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/calculator">
          <img src={cal} alt="calculator" />
        </Link>
      </Project>
      <ScrolTop/>
    </Work>
  )
}
export default MyWork