import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
     display: flex;
     margin: auto;
     justify-content: space-between;
     align-items: center;
     padding: 1rem 6rem;
     background: #282828;
     position: sticky;
     top: 0;
     z-index: 10;
     a{
          color: white;
          text-decoration: none;
     }
     ul{
          display: flex;
          list-style: none;
          font-family: "Inter", sans-serif;
          #home{
               display: none;
          }
     }
     img{

          width: 15%;
          margin: 0rem 2rem;
     }
     li{
          padding-left: 9rem;
          position: relative;
     }
     @media (max-width: 728px){
          flex-direction: column;
          padding: 1.5rem 8rem;
          position: sticky;
          width: 150%;
          
          #logo{
               display: inline-block;
               margin: 0rem 45rem;
               display: none;
               width: 5%;
          }
          ul{
               justify-content: space-around;
               width: 100%;
               margin: 0rem 0.5rem;
               #home{
                    display: inline-block;
               }
          }
          li{
               padding: 0rem 3rem;
               margin: 0rem 0.5rem;
          }
     }
     `;
const Hide = styled.div`
overflow: hidden;
`;

const Line = styled(motion.div)` 
     height: 0.3rem;
     width: 0%;
     bottom: -10%;
     background: #23d997;
     position: relative;
     left: 5%;
     @media(max-width: 728px){
          left: 0%;
     }
     
 `;

 export {StyledNav,Hide, Line}