import React, { useEffect, useState } from 'react'


import axios from "axios";
import { Axios } from "axios";

const Profile = () => {
    const [profile, setProfile] = useState(null)

    const axios = new Axios({});

     
     useEffect(()=>{
        axios.get("http://localhost:3002/profile")
        .then((data) => {
            const profile = JSON.parse(data.data)
            setProfile(profile); console.log(profile)
        
        })
     },[])

  return (
    <div className='m-5'>
        {profile ? (
            <div>
                <img  src={profile.profilePic} className='profile rounded-circle' alt="" />
                {profile.username}
            </div>
        )
        : 
        (<div>
            Loading.......
        </div>)}
    </div>
  )
}

export default Profile