import React, {useEffect} from 'react'
// import animations and styled componets
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

//import png logs
import upwork from "../images/footer/upwork.png"
import linkedin from "../images/footer/linkedin.png"
import github from "../images/footer/github.png"
import fiverr from "../images/footer/fiverr.png"
import instagram from "../images/footer/instagram.png"
import slack from "../images/footer/slack.png"
const ReachMe = () => {
     let gitUrl ='https://github.com/awaissaddiqui';
     let upworkUrl ='https://www.upwork.com/freelancers/~011fe6ce84d3da23e7';
     let linkedUrl ='https://www.linkedin.com/in/awais-saddiqui-69b80020a';
     let instagramUrl ='https://www.instagram.com/awaissaddiqui143/';
     let fiverrUrl = 'https://www.fiverr.com/awaissaddiqui';
     let slackUrl = 'https://app.slack.com/client/T042B78BFMK/C0433SV6USC/rimeto_profile/U042E6C03EW'
  
     useEffect(()=>{
      AOS.init();
 },[])
    
     return (
  <div className='icons' >
   <Heading className="reachme"  data-aos="zoom-in-up">
     <h1>Reach Me</h1>
   </Heading>
   <Links className="reach_me_links" data-aos="zoom-in-down">
     <a href={upworkUrl} target="_blank" rel="noreferrer noopener" ><img className='upwork' src={upwork} alt="upwork freelancing" /></a>
     <a href={gitUrl} target="_blank" rel="noreferrer noopener"><img src={github} alt="Awais github" /></a>
     <a href={linkedUrl} target="_blank" rel="noreferrer noopener"><img className='Awais linkedin' src={linkedin} alt="Awais linkedin" /></a>    
     <a href={instagramUrl} target="_blank" rel="noreferrer noopener"><img className='Awais instagramm' src={instagram} alt="Awais Saddiqui Instagram" /></a>    
     <a href={fiverrUrl} target="_blank" rel="noreferrer noopener"><img className='fiverr' src={fiverr} alt="Awais Saddiqui fiverr" /></a>    
     <a href={slackUrl} target="_blank" rel="noreferrer noopener"><img className='linkedin' src={slack} alt="Awaissaddiqui" /></a>    
   </Links>
      </div>
  )
}

export default ReachMe

const Heading = styled.h1`
     color: white;
     font-family: "Inter", sans-serif;
     text-align: center;
     color: #23d997;
`;

const Links = styled.a`
   display: inline-block;
   justify-content: space-between;
   position: relative;
   padding: 2rem 8rem;
   margin: 2rem 15rem;
   margin-bottom: 10rem;
   width: 70%;
   a{
      padding: 0rem 1.5rem;
   }
`
