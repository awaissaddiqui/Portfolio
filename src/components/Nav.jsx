import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
     <StyledNav>
          <h1>
               <a id='logo' href="#">Capture</a>
          </h1>
          <ul>
               <li>
                    <a href="#">1. About Us</a>
               </li>
               <li>
                    <a href="#">2. Contact Us</a>
               </li>
               <li>
                    <a href="#">4. Our Work</a>
               </li>
          </ul>
     </StyledNav>
    
  )
}


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



export default Nav