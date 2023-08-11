import React,{useRef, useState} from 'react'
import emailjs from "emailjs-com"
//import svgs
import phone from "../images/inputAssets/phone.svg"
import emailPic from "../images/inputAssets/email.svg"
import location from "../images/inputAssets/location.svg"
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from '../Animations/PageAnimation';
import {ContactStyle, Title, Hide, Form,StyledInput,StyledText,StyledButton} from "../styles/contactStyle";
const ContactUS = () => {
  const form = useRef();
  const [name, setName]=useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("")
  const [message,  setMessage]= useState('');



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
        <div className='phone'><span><img src={phone} alt="phone" /></span>Phone: <span>+92343-9856501</span> </div>
        <div className='email'><span><img src={emailPic} alt="email" /></span>Email: <span>awaissaddiqui143@gmail.com</span></div> 
        <div className='address'><span><img src={location} alt="address" /></span>Address: <span>Islamabad, Pakistan</span></div>  
        </Hide>
      <Form ref={form} onSubmit={sendEmail} id="form" >
        <StyledInput type="text" name="name" id="name" placeholder='Name' required />
        <StyledInput type="email" name="email" id="email" placeholder='Email' required />
        <StyledInput type="text" name="subject" id="subject" placeholder='Subject' required />
        <StyledText name='message' id='message' placeholder='Message' required/>
        <StyledButton type="submit">SEND</StyledButton>
      </Form>
    </motion.div>
    </ContactStyle>
  )
}

export default ContactUS