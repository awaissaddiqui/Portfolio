import React from 'react'
import { FooterStyle, Privacy } from '../styles/footerStyle'
//import svg logs
import upwork from "../images/footer/upwork.svg"
import linkedin from "../images/footer/linkedin.svg"
import github from "../images/footer/github.svg"
// import twitter from "../images/footer/twitter.svg"

const Footer = () => {
     let gitUrl ='https://github.com/awaissaddiqui';
     let upworkUrl ='https://www.upwork.com/freelancers/~011fe6ce84d3da23e7';
     let linkedUrl ='https://www.linkedin.com/in/awais-saddiqui-69b80020a';
  return (
     <>
    <FooterStyle>
      <div className='icons' >
     <a href={upworkUrl} ><img className='upwork' src={upwork} alt="upwork" /></a>
     <a href={gitUrl} ><img src={github} alt="github" /></a>
     <a href={linkedUrl} ><img className='linkedin' src={linkedin} alt="linkedin" /></a>    
      </div>
      <div className='code'>©Code with AWAIS</div>
      <Privacy className='code2'>Privacy Policy</Privacy>
    </FooterStyle>
     </>
  )
}

export default Footer