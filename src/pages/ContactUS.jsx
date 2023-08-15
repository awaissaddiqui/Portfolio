import React,{useRef, useState} from 'react'
import emailjs from "emailjs-com"
//import svgs
import phone from "../images/inputAssets/phone.svg"
import emailPic from "../images/inputAssets/email.svg"
import location from "../images/inputAssets/location.svg"
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation, photoAnimation, titleAnimation } from '../Animations/PageAnimation';
import {ContactStyle, Title,Address, Hide, Form,StyledInput,StyledText,StyledButton} from "../styles/contactStyle";
import { useNavigate } from 'react-router-dom'

const ContactUS = () => {
  const navigaton = useNavigate();
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
    navigaton("/thanks")
    console.log(result);
  }).catch((err) =>{
    console.log(err);
  })
  setName("");
  setEmail("");
  setSubject("");
  setMessage("");
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
      <Address variants={photoAnimation} initial="hidden" animate="show">
        <div className='phone'><span><img src={phone} alt="Awais phone" /></span>Phone: <span>+92343-9856501</span> </div>
        <div className='email'><span><img src={emailPic} alt="awais email" /></span>Email: <span>awaissaddiqui143@gmail.com</span></div> 
        <div className='address'><span><img src={location} alt="Awais address" /></span>Address: <span>Islamabad, Pakistan</span></div>  
      </Address>
        </Hide>
      <Form ref={form} onSubmit={sendEmail} id="form" >
        <StyledInput type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)}  value={name} placeholder='Name' required />
        <StyledInput type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Email' required />
        <StyledInput type="text" name="subject" id="subject" onChange={(e)=> setSubject(e.target.value)} value={subject} placeholder='Subject' required />
        <StyledText name='message' id='message' onChange={(e)=> setMessage(e.target.value)} value={message} placeholder='Message' required/>
        <StyledButton type="submit">SEND</StyledButton>
      </Form>
    </motion.div>
    </ContactStyle>
  )
}

export default ContactUS