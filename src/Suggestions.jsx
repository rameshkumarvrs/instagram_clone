import React, { useEffect, useState } from 'react'

const Suggestions = () => {

  const [profile, setProfile] = useState(null)
  const [suggestions, setSuggestions] = useState([])

  
  useEffect(()=> {
    fetch("http://localhost:3002/profile").
    then(data => data.json()).
    then(data=> setProfile(data)).
    catch(err => console.log(err))

     fetch("http://localhost:3002/suggestions").
    then(data => data.json()).
    then(data=> setProfile(data)).
    catch(err => console.log(err))

  },[])

  return (
    <div>
    
       <div className='d-flex'>
          <img className="dp rounded-circle" src={post.profilePic} alt="Profile pic" />
          <h5>{post.username}</h5>
       </div>

    </div>
  )
}

export default Suggestions