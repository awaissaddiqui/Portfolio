import React from 'react'
// Page components
import Home from '../components/Home'
import FaqSection from "../components/FaqSection"
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from '../Animations/PageAnimation';
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <Home />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs