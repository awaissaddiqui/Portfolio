import { motion } from "framer-motion"
import styled from "styled-components"
// styled Home.jsx
const Home1 = styled.div`
     min-height: 90vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 5rem 10rem;
     color: white;
     `;
const Description = styled.div`
     flex:1;
     font-family: 'Lobster', cursive;
     z-index: 2;
     h2{
     font-weight: lighter;
     }
`;
const Image = styled.div`
     flex: 1;
     overflow: hidden;
     z-index: 2;
     img{
     max-width: 100%;
     width: 100%;
     height: 74vh;
     object-fit: cover;
     margin: 0rem 3.5rem;
     }
`;
const Hide = styled.div`
  overflow: hidden;
`;

// styled Nav.jsx
const StyledNav = styled.nav`
     display: flex;
     min-height: 10vh;
     margin: auto;
     justify-content: space-between;
     align-items: center;
     padding: 1rem 6rem;
     background: #282828;
     a{
          color: white;
          text-decoration: none;
     }
     ul{
          display: flex;
          list-style: none;
          font-family: "Inter", sans-serif;
     }
     #logo{
          font-size: 2rem;
          font-family: "Lobster" , cursive;
          font-weight: lighter;
          color: white;
     }
     li{
          padding-left: 9rem;
          position: relative;
     }
     `;

// style MyWork.jsx
const Work = styled(motion.div)`
     min-height: 100vh;
     overflow: hidden;
     padding: 2rem 4rem;
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

// FAQ Section
const Faq = styled(Home1)`
  display: block;
  span{
     color: #23d997;
  }
  h2{
     font-weight: lighter;
     padding-bottom: 4rem;
  }
  .faq-line{
     background: #cccccc;
     height: 0.2rem;
     width: 100%;
     margin: 2rem 0rem;
  }
  .answer{
     padding: 1rem 0rem;
     p{
          padding: 1rem 0rem;
          font-family: "Inter", sans-serif;
     }
  }
`;

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
`

// Exports all components
export {
     Home1, Description, Image,
     Hide, StyledNav, Work, Project,
     Details, HeadLine, AwardStyle, 
     Awards, Faq, Framer1,Framer2,
     Framer3,Framer4
}
