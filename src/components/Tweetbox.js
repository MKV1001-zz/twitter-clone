import React from 'react'
import {useState} from 'react';
import './Tweetbox.css'
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore/lite";
function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setImageUrl] = useState("");
  function sendTweet(e){
    e.preventDefault();
    try{
      const docRef = addDoc(collection(db,'posts'), {
        displayName:"Janeisawop",
        username:"jane_jackson",
        mediaContent:tweetImage,
        text:tweetMessage,
        avatar:"https://media.allure.com/photos/60d8f779b5dcf339d4307d32/4:3/w_2839,h_2129,c_limit/madonna.jpg",
        verified:true
      })
      console.log(docRef.id)
    }catch (e) {
      console.error("Error adding document: ", e);
    }
   
     
   

  }

  return (
    <div className="tweetBox"> 
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"/>
                <input  
                onChange={e=>setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder='Whats Happening?'></input>
            </div>
            <input 
            onChange={e=>setImageUrl(e.target.value)}
            value={tweetImage}
            className="tweetBox__imageInput"placeholder='Enter Image Url'></input>
            <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
        </form>
    
    </div>
  )
}

export default Tweetbox;