//import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { create } from "axios";

const axios = create();

const Suggestions = () => {

  const [profile, setProfile] = useState(null)
  const [suggestions, setSuggestions] = useState([])

  
  useEffect(()=> {
    fetch("http://localhost:3002/profile")
    .then(data => data.json())
    .then(data=> setProfile(data))
    .catch(err => console.log(err))

     fetch("http://localhost:3002/suggestions")
     .then(data => data.json())
     .then(data=> setSuggestions(data))
     .catch(err => console.log(err))

  },[])

  const handleFollow = (id, username, profilepic) => {
    axios.post("http://localhost:3002/followers",{
  "id": id,
  "username": username,
  "profilePic": profilepic
})
    .then(() => {alert("followed")})
    .catch(err => {console.log(err)}) 
  }

  return (
    <div>
      <div className='suggestion w-75 m-4'>
        {profile ?
       <div className='d-flex '>
          <img className="dp rounded-circle" src={profile.profilePic} alt="Profile pic" />
          <h5>{profile.username}</h5>
          <small className='ms-auto text-primary'>Switch</small>
       </div> 

       : <p>Loading</p> }

       <div className='d-flex'>
        <p>Suggested for you</p>
        <b className='ms-auto'>See all</b>
       </div>

       {suggestions.length > 0 ? (
        <div>
           {suggestions.map((suggestion)=>(
            <div  key={suggestion.id}>
               <div className='d-flex'>
                <img className="dp rounded-circle" src={suggestion.profilePic} alt="Profile pic" />
                <h5>{suggestion.username}</h5>
                {/* <a className='text-primary ms-auto' onClick={() => handleFollow(suggestion.id, suggestion.username, suggestion.profilePic)}>follow</a> */}

                <button
                    type="button"
                    className="btn btn-link text-primary ms-auto p-0 border-0"
                    onClick={() =>
                      handleFollow(
                        suggestion.id,
                        suggestion.username,
                        suggestion.profilePic
                      )
                    }
                  >
                    Follow
                </button>
               </div>
              
            </div>
           ))}
        </div>
      ) : (
        <div>
          Loading 
        </div>
      )}

      </div>
      

    </div>
  )
}

export default Suggestions