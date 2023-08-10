import React,{useRef} from 'react'
import emailjs from "emailjs-com"
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from '../Animations/PageAnimation';
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
}
  return (
    <div className="contact " style={{"background":"white"}}>

    <motion.div 
    variants={pageAnimation}
    initial="hidden"
    animate="show"
    exit="exit"
    
    >
      <form ref={form} onSubmit={sendEmail} >
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" required />

        <label htmlFor="message">Message</label>
        <textarea name='message' id='message' required/>
        <input type="submit" value="send" />
      </form>
    </motion.div>
    </div>
  )
}

export default ContactUS