import React from 'react'
import ml from "../images/pics/ml.png"
import AI from "../images/pics/AI.png"
import skill from "../images/pics/skill.png"
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { scrollReveal } from '../Animations/PageAnimation';
import {useScroll} from "../components/UseScroll"
import { motion } from 'framer-motion';


const Carusel = () => {
  const [element, controls] = useScroll();
  return (
     <Transition ref={element} variants={scrollReveal} initial="hidden" animate={controls} >
      <h3>Certification</h3>
     <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={AI}
        alt='Artificial intelligence '
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={ml}
        alt='Machine learing'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={skill}
        alt='tech certificates'
      />
    </MDBCarousel>
    </Transition>
  )
}

const Transition = styled(motion.div)` 
     width: 60%;
     margin: 3rem 15rem;
     height: 75vh;
     @media(max-width: 576px){
          width: 40%;
          height: 25vh;
          margin: 4rem 20rem;
     }
 `;
 
export default Carusel

