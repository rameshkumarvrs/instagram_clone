import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


//import axios from "axios";


import { create } from "axios";

const axios = create();

//import { Axios } from "axios";

const Profile = () => {
    const [profile, setProfile] = useState(null)

    const [followers,setFollowers] = useState(null)

    //const axios = new Axios({});

     
     useEffect(()=>{
        axios.get("http://localhost:3002/profile")
        .then((data) => {
            //const profile = JSON.parse(data.data)
            //setProfile(profile); console.log(profile)
            setProfile(data.data); console.log(data.data)
            
            

        axios.get("http://localhost:3002/followers")
        .then((data) => {
            setFollowers(data.data); console.log(data.data)
            
        })    
        
        })
     },[])

     function onChangeHandler (e) {

        
       setProfile((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
       }))
     }

    //  const handleUpdate = async () => {

        
    //     axios.put("http://localhost:3002/profile",profile)
    //     .then((response) => {
    //         console.log("updated")
    //         console.log(response.data)
    //         //console.log(profile);
    //         //console.log(typeof profile);
    //         console.log("Profile before PUT:", profile);
    //          console.log("JSON:", JSON.stringify(profile));
    //     })
    //     .catch((err) => console.log(err) )
    //     }

    const handleUpdate = async () => {
  try {
    console.log("Sending:", profile);

    const response = await axios.put(
      "http://localhost:3002/profile",
      profile
    );

    console.log("Response:", response.data);
  } catch (err) {
    console.error(err);
  }
};

     

  return (
    <div className='m-5'>
        {profile ? (
            <div>
                
                <div>
               
                <img  src={profile.profilePic} className='profile rounded-circle' alt="" />
                 <Link className="d-flex justify-content-center" to="/">Home</Link>
                <p>{profile.username}</p>

                </div>

                <div>
                

                </div>
                

                <div >
                     <input type="text" 
                       name = "username"
                       value = {profile.username}
                       className='form-control my-3' 
                       style={{width: "50%"}}
                       onChange={onChangeHandler}
                
                />

                <input type="text" 
                       name = "profilePic"
                       value = {profile.profilePic}
                       className='form-control'
                       style={{width: "50%"}}
                       onChange={onChangeHandler}
                />

                <button className='btn btn-primary my-4' onClick={handleUpdate}>Update</button>

                </div>

                

               

            </div>
        )
        : 
        (<div>
            Loading.......
        </div>)}

        <div>
        {followers ? 
        (<div> 

         {followers.map((follower) => (
            <div key={follower.id}>{follower.username}</div>
         ))}

        </div>) 
        : 
        
        (<div> followers loading.......</div>)}
    </div>

    </div>

    
  )
}

export default Profile