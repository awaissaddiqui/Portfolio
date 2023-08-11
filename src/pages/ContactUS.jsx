import React,{useRef} from 'react'
import emailjs from "emailjs-com"
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from '../Animations/PageAnimation';
import {ContactStyle, Title, Hide} from "../styles/contactStyle";
const ContactUS = () => {
  const form = useRef();
const sendEmail=(e)=>{
  e.preventDefault();  
  emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    form.current,
    process.env.REACT_APP_USER_ID,
  ).then(result=>{
    console.log(result.text)
  }).catch((err) =>{
    console.log(err);
  })
  console.log(e);
}
  return (
    <ContactStyle className="contact " style={{"background":"white"}}>

    <motion.div 
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    >
        <Hide>
      <Title>
          <motion.h2 variants={titleAnimation}>Get In Touch</motion.h2>
      </Title>
        </Hide>
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="name" id="name" placeholder='Name' required />
        <input type="email" name="email" id="email" placeholder='Email' required />
        <input type="text" name="subject" id="subject" placeholder='Subject' required />
        <textarea name='message' id='message' placeholder='Message' required/>
        <input type="submit" value="send" />
      </form>
    </motion.div>
    </ContactStyle>
  )
}

export default ContactUS