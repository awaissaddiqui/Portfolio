import React from 'react'
import { Link } from 'react-router-dom'
import envelope from "../images/inputAssets/envelope.svg"
import { Message } from '../styles/ThankYou'
const ThankYou = () => {
  return (
    <Message>
     <img src={envelope} alt="Thank You Message"/>
     <h1>Thanks for submitting!</h1>
     <div>your message has been sent!</div>
     <button><Link to="/"/>Go Home</button>
    </Message>
  )
}

export default ThankYou