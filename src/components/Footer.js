import React from 'react'
import { FooterStyle } from '../styles/footerStyle'
//import svg logs
import upwork from "../images/footer/upwork.svg"
import whatsapp from "../images/footer/whatsapp.svg"
import instagram from "../images/footer/Instagram.svg"
import linkedin from "../images/footer/linkedin.svg"
import github from "../images/footer/github.svg"
import twitter from "../images/footer/twitter.svg"

const Footer = () => {
     let gitUrl ='https://github.com/awaissaddiqui';
     let upworkUrl ='https://github.com/awaissaddiqui';
     let whatsappUrl ='https://github.com/awaissaddiqui';
     let linkedUrl ='https://github.com/awaissaddiqui';
     let instagramUrl ='https://github.com/awaissaddiqui';
     let twitterUrl = "https://github.com/awaissaddiqui"
  return (
     <>
    <FooterStyle>
     <a href={gitUrl} ><img src={github} alt="github" /></a>
     <a href={upworkUrl} ><img src={upwork} alt="upwork" /></a>
     <a href={whatsappUrl} ><img src={whatsapp} alt="whatsapp" /></a>
     <a href={linkedUrl} ><img src={linkedin} alt="linkedin" /></a>
     <a href={instagramUrl} ><img src={instagram} alt="instagramUrl" /></a>
     <a href={twitterUrl} ><img src={twitter} alt="twitter" /></a>
    
    </FooterStyle>
     </>
  )
}

export default Footer