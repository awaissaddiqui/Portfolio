import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
     display: flex;
     min-height: 10vh;
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
     }
     #logo{
          font-size: 1.5rem;
          font-family: "Lobster" , cursive;
          font-weight: lighter;
          color: white;
     }
     li{
          padding-left: 9rem;
          position: relative;
     }
     @media (max-width: 576px){
          flex-direction: column;
          padding: 2rem 2rem;
          #logo{
               display: inline-block;
               margin: 1.5rem;
          }
          ul{
               padding: 2rem;
               justify-content: space-around;
               width: 100%;
          }
          li{
               padding: 0;
          }
     }
     `;


const Line = styled(motion.div)` 
     height: 0.3rem;
     width: 0%;
     bottom: -10%;
     background: #23d997;
     position: relative;
     left: 5%;
     @media(max-width: 992px){
          left: 0%;
     }
     
 `;

 export {StyledNav, Line}