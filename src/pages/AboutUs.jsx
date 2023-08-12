import React from 'react'
// Page components
import Home from '../components/Home'
import Footer from '../components/Footer';
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from '../Animations/PageAnimation';
import ScrolTop from '../components/ScrolTop';
import Carusel from '../components/Carusel';
import Resume from '../components/Resume';
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <Home />
      <ScrolTop/>
      <Resume/>
      <Carusel/>
      <Footer/>
    </motion.div>
  )
}

export default AboutUs