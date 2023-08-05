import React from 'react'

const FaqSection = () => {
  return (
    <div className="faq">
     <h2>Any Question <span>FAQ</span></h2>
     <div className="questtion">
          <h4>How Do I start?</h4>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
     </div>
     <div className="questtion">
          <h4>Daily Schdule</h4>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
     </div>
     <div className="questtion">
          <h4>Different Payment Methods</h4>
          <div className="answer">
               <p>Lorem ipsum dolor sit amet.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aut, architecto.</p>
          </div>
     </div>
    </div>
  )
}

export default FaqSection