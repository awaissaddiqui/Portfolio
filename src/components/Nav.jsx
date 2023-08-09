import React from 'react'
import { StyledNav } from '../styles/style'
import { Link } from "react-router-dom"
const Nav = () => {
     return (
          <StyledNav>
               <h1>
                    <Link id='logo' to="/">Capture</Link>
               </h1>
               <ul>
                    <li>
                         <Link to="/services">Services</Link>
                    </li>
                    <li>
                         <Link to="/work"> My Work</Link>
                    </li>
                    <li>
                         <Link to="/contact"> Contact Us</Link>
                    </li>
               </ul>
          </StyledNav>

     )
}




export default Nav