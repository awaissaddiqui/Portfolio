import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hide_show = () => {
  return (
    <Personal>
     <ul>
          <li><Link to="/resume" ><Resume className="cv">Resume</Resume></Link></li>
          <li><Link to="/academic" ><Academic className="academic">Academic Record</Academic></Link></li>
          <li><Link to="/certificates" ><Certificate className="certificate">Certifications</Certificate></Link></li>
     </ul>
    </Personal>
  )
}

export default Hide_show

const Personal = styled.div` 
     
     ul{
          display: block;
          position: relative;
          list-style: none;
          padding: 5rem 0rem;
          margin: 2rem 0rem;
          width:12rem;
     }
     
     li{
           margin: 1rem 0rem;
     }
     a{
          text-decoration: none;
     }
     `;

const Resume = styled.div`
     color: white;
     font-size: 1.5rem;
     background-color: #23d997;
`;
const Academic = styled.div`
     color: white;
     font-size: 1.5rem;
     background: #8ed2ff;
`;
const Certificate = styled.div`
     color: white;
     font-size: 1.5rem;
     background: #8effa0;
`;