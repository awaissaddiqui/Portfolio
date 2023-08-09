import React from 'react'
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from '../Animations/PageAnimation';
const ContactUS = () => {
  return (
    <motion.div 
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    >ContactUS</motion.div>
  )
}

export default ContactUS