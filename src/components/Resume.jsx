import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { scrollReveal } from '../Animations/PageAnimation';
import {useScroll} from "../components/UseScroll"
const Resume = () => {
     const [element, controls] = useScroll();
  return (
  <>
  <Button ref={element} variants={scrollReveal} initial="hidden" animate={controls}>
     <a href='Awais.pdf' download="Awais.pdf">Download CV</a>     
     </Button>
  
  </>
  )
}
const Button = styled(motion.button)`
     margin:8rem 10rem;
     border: 3px solid #23d997;
     padding: 1rem 1.5rem;
     a{
          color: white;
          text-decoration: none;
     }
     @media(max-width: 650px){
          padding: 1rem 8rem;
          margin:6rem 23rem;
     }

`;
export default Resume