import React from 'react'
import styled from 'styled-components'
import error from "../images/inputAssets/24.svg"
import { lineAnimation } from '../Animations/PageAnimation'
import { motion } from 'framer-motion'
const Error = () => {
  return (
    <Image>
      <motion.img src={error} variants={lineAnimation} 
      initial="hidden" animate="show" alt="error page" className="error"/>
    </Image>
  )
}
const Image = styled(motion.div)` 
  position: fixed;
     left: 0%;
     top: 10%;
     height: 100vh;
     width: 100%;
     background: #8ed2ff;
     @media(max-width: 1300px){
      width: 100%;
     }
`;

export default Error