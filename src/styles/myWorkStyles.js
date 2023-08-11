import styled from "styled-components";
import {motion} from "framer-motion" 

// Framers
const Framer1= styled(motion.div)`
     position: fixed;
     left: 0%;
     top: 10%;
     height: 100vh;
     width: 100%;
     background: #fffebf;
     z-index: 2;
`;
const Framer2=styled(Framer1)`
     background: #ff8efb;
`
const Framer3=styled(Framer1)`
     background: #8ed2ff;
`
const Framer4=styled(Framer1)`
     background: #8effa0;
`;

const Work = styled(motion.div)`
     min-height: 100vh;
     overflow: hidden;
     padding: 2rem 4rem;
     @media (max-width: 650px){
          padding: 2rem 6rem;
     }
     h2{
     padding: 1rem 0rem;
     }
     `;
const Project = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
      height: 0.5rem;
      background: #23d997;
      margin-bottom: 3rem;
    }
    img{
      width: 100%;
      height: 80vh;
      /* object-fit: ; */
    }
    h2{
     font-family: 'Lobster', cursive;
     color: #cccccc;
    }
  `;
  const Hide = styled.div`
  overflow: hidden;
`;

export { Framer1,Framer2, Framer3,Framer4, Work, Project, Hide}