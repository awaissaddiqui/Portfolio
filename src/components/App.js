import React, {useState} from 'react'

// import components
import TweetList from "./TweetList";
import CreateTweet from "./CreateTweet"

const App = () => {
  const name= "Awais";
    //  const [name, setName] = useState("Awais");
     const [textInput, setTextInput] = useState("");
     const [tweets, setTweets] = useState([]);

  return (
    <div>
     <CreateTweet 
          textInput={textInput}
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets = {setTweets}
          />
          <TweetList name={name} tweets = {tweets} setTweets={setTweets}/>
    </div>
  )
}

export default App