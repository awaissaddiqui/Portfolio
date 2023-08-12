import React from 'react'
import styled from 'styled-components'
const Resume = () => {
  return (
  <>
  <Button>Download CV</Button>
  
  </>
  )
}

const Button = styled.button`
     margin:4rem 10rem;
     border: 3px solid #23d997;
     padding: 1rem 1.5rem;
     @media(max-width: 650px){
          padding: 1rem 8rem;
          margin:6rem 23rem;
     }
`;
export default Resume