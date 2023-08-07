import React from 'react'
import styled from 'styled-components'
import { Home1 } from '../styles/style'

const FaqSection = () => {
  return (
    <Faq>
     <h2>Any Question <span>FAQ</span></h2>
     <div className="questtion">
          <h4>How Do I start?</h4>
          <div className="faq-line"></div>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
     </div>
     <div className="questtion">
          <h4>Daily Schdule</h4>
          <div className="faq-line"></div>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
     </div>
     <div className="questtion">
          <h4>Different Payment Methods</h4>
          <div className="faq-line"></div>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
     </div>
    </Faq>
  )
}

const Faq = styled(Home1)`
  display: block;
  span{
     color: #23d997;
  }
  h2{
     font-weight: lighter;
     padding-bottom: 4rem;
  }
  .faq-line{
     background: #cccccc;
     height: 0.2rem;
     width: 100%;
     margin: 2rem 0rem;
  }
  .answer{
     padding: 1rem 0rem;
     p{
          padding: 1rem 0rem;
          font-family: "Inter", sans-serif;
     }
  }
`;

export default FaqSection