import React from 'react'
import {v4 as uuidv4} from "uuid"
const CreateTweet = ({tweets, setTweets, setTextInput, textInput}) => {

//function
const submitTweetHandler=(e)=>{
     if(!textInput) return alert("Text input cannot be empty")
     e.preventDefault();
     setTweets([...tweets, {message:textInput, id:uuidv4()}])
     setTextInput("");
}
const userInputHandler=(e)=>{
     setTextInput(e.target.value);
}
  return (
    <div>
     <form onSubmit={submitTweetHandler}>
          <textarea 
               value={textInput}
               onChange={userInputHandler}
               cols="30"
               rows="5"
               ></textarea><br></br>
               <button  className='btn btn-success'>Submit</button>
     </form>
    </div>
  )
}

export default CreateTweet