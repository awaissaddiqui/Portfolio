import React from 'react'
import home1 from "../images/home1.png"
import { Home1, Description,Image, Hide} from '../styles/style'
const Home = () => {
  return (
    <Home1 >
    <Description>
      <div>
        <Hide>
          <h2>We work to make </h2>
        </Hide>
        <Hide>
          <h2>your <span>dreams</span> come true </h2>
        </Hide>
        </div>
      <p>We are providing an amazing skills .
         Please contact us for professional work</p>
         <button>Contact Us</button>
    </Description>
         <Image>
      <img src={home1}  alt="home1" />
         </Image>
    </Home1>
  )
}


export default Home