import styled from "styled-components";
import {motion} from "framer-motion" ;

// style Project Detatil 

const Details = styled(motion.div)`
     color: white;
`;
const HeadLine = styled.div`
     min-height: 90vh;
     padding-top: 20vh;
     position: relative;
     h2{
          position: absolute;
          top: 10%;
          left: 43%;
          transform: translate(-10%, -10%);
     }
     video{
          width: 100%;
          height: 60vh;
     }
`;
const Awards = styled.div`
     min-height: 50vh;
     display: flex;
     margin: 5rem 10rem;
     align-items: center;
     justify-content: space-around;
     @media (max-width: 500px){
         display: block;
         margin: 2rem 2rem;
     }
`;
const AwardStyle = styled.div`
     padding: 3rem;
     h3{
          font-size: 2rem;
     }
     .line{
          width: 100%;
          background: #23d997;
          height: 0.5rem;
          margin: 1rem 0rem;
     }
`;
export {Details, HeadLine, AwardStyle,  Awards}