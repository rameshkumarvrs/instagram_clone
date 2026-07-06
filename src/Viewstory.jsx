import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Viewstory = () => {
    const {id} = useParams()

    const [story, setStory] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3002/story/${id}`).
        then((data) => data.json()).
        then((data) => setStory(data)).
        catch((err) => console.log(err))
    },[])


  return (
    
    <div>{story? <div>{story.username}</div> : <div>Loading...</div>}
    </div>
  )
}

export default Viewstory