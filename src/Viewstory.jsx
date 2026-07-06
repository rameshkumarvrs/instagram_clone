import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Viewstory = () => {
    const {id, tot} = useParams()
    const navigate = useNavigate()

    const [story, setStory] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3002/story/${id}`).
        then((data) => data.json()).
        then((data) => setStory(data)).
        catch((err) => console.log(err))
    },[id])

    if(id > tot || id < 1) {
        navigate("/")
    }


  return (
    
    <div>{story? <div className='d-flex justify-content-center align-items-center'>
        <Link to={`http://localhost:3000/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-square-fill"></i></Link>

        <img className='vh-100 ' src={story.image} alt="story" />

        <Link to={`http://localhost:3000/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-square-fill"></i></Link>
    </div> 
    
    : 
    
    <div>Loading...</div>}
    </div>
  )
}

export default Viewstory