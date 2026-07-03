import React, { useEffect, useState } from 'react'

function Posts() {

   
  const [posts,setPosts] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3002/posts").
    then((data) => data.json()).
    then((data) => setPosts(data)).
    catch((error) => console.log(error))
  },[])


  return (
    <div>
      {posts.length > 0 ? (
        <div>
           {posts.map((post)=>(
            <div key={post.id}>
               <div className='d-flex'>
                <img className="dp rounded-circle" src={post.profilePic} alt="Profile pic" />
                <h5>{post.username}</h5>
               </div>
               <img src={post.image} alt="post" />
            </div>
           ))}
        </div>
      ) : (
        <div>
          Loading posts
        </div>
      )}
    </div>
  )
}

export default Posts