import React from 'react'
import ml from "../images/pics/ml.png"
import AI from "../images/pics/AI.png"
import skill from "../images/pics/skill.png"
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import styled from 'styled-components';

const Carusel = () => {
  return (
     <Transition>
      <h3>Certification</h3>
     <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={AI}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={ml}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={skill}
        alt='...'
      />
    </MDBCarousel>
    </Transition>
  )
}

const Transition = styled.div` 
     width: 60%;
     margin: 6rem 15rem;
     height: 75vh;
     @media(max-width: 576px){
          width: 40%;
          height: 25vh;
          margin: 4rem 20rem;
     }
 `;
 
export default Carusel

