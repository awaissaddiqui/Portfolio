import React from 'react'
import { FooterStyle} from '../styles/footerStyle'
//import png logs
import upwork from "../images/footer/upwork.png"
import linkedin from "../images/footer/linkedin.png"
import github from "../images/footer/github.png"

const Footer = () => {
     let gitUrl ='https://github.com/awaissaddiqui';
     let upworkUrl ='https://www.upwork.com/freelancers/~011fe6ce84d3da23e7';
     let linkedUrl ='https://www.linkedin.com/in/awais-saddiqui-69b80020a';
  return (
     <>
    <FooterStyle>
      <div className='icons' >
     <a href={upworkUrl} ><img className='upwork' src={upwork} alt="upwork freelancing" /></a>
     <a href={gitUrl} ><img src={github} alt="Awais github" /></a>
     <a href={linkedUrl} ><img className='linkedin' src={linkedin} alt="Awais linkedin" /></a>    
      </div>
      <div className='code'>©Code with AWAIS</div>
      <div className='code2'>Privacy Policy</div>
    </FooterStyle>
     </>
  )
}

export default Footer