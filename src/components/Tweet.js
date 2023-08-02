import React from 'react'
//import style from"./styles/Tweet.module.css"
const Tweet = ({name, tweet, tweets, setTweets}) => {
     const deleteTweet = ()=>{
      console.log(tweet.id);
          setTweets(tweets.filter((state)=> state.id!==tweet.id))
     }
  return (
    // <div className="tweet" >
    <>
      <div className="row">
      <div className="col-1 border-2">
     <h2 className='col-2'>{name}</h2>
     <h3>{tweet.message}</h3>
      </div>
     <button className='btn btn-danger' onClick={deleteTweet}>Delete</button>
     <button className='btn btn-primary'>Like</button>
      </div>
      </>
   // </div>
  )
}

export default Tweet