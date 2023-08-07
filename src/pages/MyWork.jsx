import React from 'react'
// images
import shofipy from "../images/assets/shofipy.jpg"
import chattapp from "../images/assets/chattapp.jpg"
import craps from "../images/assets/craps.png"
import cal from "../images/assets/calculator.png"
// Import styled component
import { Work, Project } from '../styles/style'

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
export default MyWork