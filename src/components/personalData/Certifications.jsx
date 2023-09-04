import React from 'react'
// Import images
import ml from "../../images/pics/ml.png"
import AI from "../../images/pics/AI.png"
import skill from "../../images/pics/skill.png";
import mlsa from "../../images/pics/mlsa.png";
import nest from "../../images/pics/nest.png";

import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { scrollReveal } from '../../Animations/PageAnimation';
import {useScroll} from "../UseScroll"
import { motion } from 'framer-motion';


const Certifications = () => {
  const [element, controls] = useScroll();
  return (
     <Transition ref={element}  variants={scrollReveal} initial="hidden" animate={controls} >
     <MDBCarousel showControls showIndicators >
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
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={mlsa}
        alt='tech certificates'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={nest}
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
     @media(max-width: 728px){
          width: 40%;
          height: 25vh;
          margin: 20rem 25rem;
     }
 `;
 
export default Certifications

