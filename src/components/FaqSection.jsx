import React from 'react'
import { Faq } from '../styles/style';


const FaqSection = () => {
  return (
    <Faq>
     <h2>Any Question <span>FAQ</span></h2>

     <div className="questtion">
          <h4>How Do I start?</h4>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
          <div className="faq-line"></div>
     </div>
     <div className="questtion">
          <h4>Daily Schdule</h4>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
          <div className="faq-line"></div>
     </div>
     <div className="questtion">
          <h4>Different Payment Methods</h4>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
          <div className="faq-line"></div>
     </div> 
    </Faq>
  )
}


export default FaqSection