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
               <div>
                <img src={post.profilePic} alt="" />
               </div>
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