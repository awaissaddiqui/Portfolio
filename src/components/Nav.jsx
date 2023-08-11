import React from 'react'
import { StyledNav, Line } from '../styles/NavStyle'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Nav = () => {
     const {pathname} = useLocation();

     return (
          <StyledNav>
               <h1>
                    <Link id='logo' to="/">Capture</Link>
               </h1>
               <ul>
                    <li>
                         <Link to="/services" >Services</Link>
                         <Line 
                    transition={{duration:0.75}}
                    initial={{width:"0%"}}
                    animate={{width: pathname=== "/services" ? "100%" :"0%"}}
                         />
                    </li>
                    <li>
                         <Link to="/work"> My Work</Link>
                         <Line 
                    transition={{duration:0.75}}
                    initial={{width:"0%"}}
                    animate={{width: pathname=== "/work" ? "100%" :"0%"}}
                         />
                    </li>
                    <li>
                         <Link to="/contact"> Contact Us</Link>
                         <Line 
                    transition={{duration:0.75}}
                    initial={{width:"0%"}}
                    animate={{width: pathname=== "/contact" ? "100%" :"0%"}}
                         />
                    </li>
               </ul>
          </StyledNav>

     )
}




export default Nav