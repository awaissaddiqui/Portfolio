import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { scrollReveal } from '../../Animations/PageAnimation';
import { useScroll } from '../UseScroll';
const Resume = () => {
     const [element, controls] = useScroll();
  return (
  <>
  <ResumeDiv className="resume">
  <Button ref={element} variants={scrollReveal} initial="hidden" animate={controls}>
     <a href='Awais.pdf' target="_blank" download="Awais.pdf">Personal CV</a>     
     </Button>
  <Button ref={element} variants={scrollReveal} initial="hidden" animate={controls}>
     <a href='Resume.pdf' target="_blank" download="Resume.pdf">LinkedIn CV</a>     
     </Button>
  </ResumeDiv>
  
  </>
  )
}
const ResumeDiv = styled.div`
     align-items: center;
     display: inline-block;
     position: relative;
     margin: 5rem 25rem;
     width: 50%;
` 
const Button = styled(motion.button)`
     border: 3px solid #23d997;
     padding: 1rem 1.5rem;
     margin: 0rem 3rem;
     a{
          color: white;
          text-decoration: none;
     }
     @media(max-width: 500px){
          display: flex;
          padding: 1.5rem 3.5rem;
     }

`;
export default Resume