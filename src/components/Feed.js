import React, { useEffect } from "react";
import Tweetbox from "./Tweetbox";
import { useState } from "react";
import Post from "./Post";
import db from "../firebase"
import { collection, getDocs } from 'firebase/firestore/lite'
import "./Feed"
 
function Feed() {
  const [posts, setPosts]= useState([  ]);
  useEffect(async()=>{
    const postsCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCol)
    const postsList = postSnapshot.docs.map(doc => doc.data())
    setPosts(postsList.map(post=>post)) 
  },[]);
     

  
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__home">Home</h2>
      </div>
 
      {/* Tweetbox */}
      <Tweetbox />
      {posts.map(post=><Post
      username={post.username}
      displayName={post.displayName}
      avatar={post.avatar}
      mediaContent={post.mediaContent}
      text = {post.text}
      verified={post.verified}
      
      />)}
      {/* <Post displayName="Makps Home"
       username="makp" 
       text="Fuck New Hampshire!!!"
       mediaContent={"https://thumbor.granitemedia.com/money/IRYStDiDIhli1HJUyOgk8H-C7i0=/480x273/filters:format(webp):quality(80)/granite-web-prod/a1/33/a1338f7070f948a8ba03b771fe797679.jpeg"}
       avatar={"https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"}
       verified
       /> */}
      
       
    </div>
  );
}

export default Feed;
