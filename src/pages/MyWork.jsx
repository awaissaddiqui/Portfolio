import React from 'react'
// images
import shofipy from "../images/assets/shofipy.jpg"
import chattapp from "../images/assets/chattapp.jpg"
import craps from "../images/assets/craps.png"
import cal from "../images/assets/calculator.png"

import styled from 'styled-components'
import {Link} from "react-router-dom"
const MyWork = () => {
  return (
    <Work>
      <Project>
        <h2>The Shofipy</h2>
        <div className="line"></div>
        <Link to="/work/shopify">
        <img src={shofipy} alt="shofipy" />
        </Link>
      </Project>

      <Project>
        <h2>The Chat Application</h2>
        <div className="line"></div>
        <Link to="/work/chatapp">
        <img src={chattapp} alt="chattapp" />
        </Link>
      </Project>

      <Project>
        <h2>Craps Game</h2>
        <div className="line"></div>
        <Link to="/work/craps">
        <img src={craps} alt="craps" />
        </Link>
      </Project>

      <Project>
        <h2>JQuery Calculator</h2>
        <div className="line"></div>
        <Link to="/work/calculator">
        <img src={cal} alt="calculator" />
        </Link>
      </Project>
    </Work>
  )
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 4rem;
  h2{
    padding: 1rem 0rem;
  }
  `;
const Project = styled.div`
    padding-bottom: 10rem;
    .line{
      height: 0.5rem;
      background: #cccccc;
      margin-bottom: 3rem;
    }
    img{
      width: 100%;
      height: 80vh;
      /* object-fit: ; */
    }
  `;
export default MyWork