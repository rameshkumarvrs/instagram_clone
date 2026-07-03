import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div>
        <img className='logo-text' src="instagram-text.png" alt="" />
        <div> <i className="bi bi-house-door"></i> Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i class="bi bi-compass-fill"></i>Explore</div>
        <div><i className="bi bi-file-play"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Messages</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div><i className="bi bi-file-plus"></i>Create</div>
        <div><i className="bi bi-person-circle"></i>Profile</div>
        
    </div>

    <div>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i class="bi bi-list"></i>More</div>
    </div>
    
    </>
    
  )
}

export default Sidebar