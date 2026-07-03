
import './App.css';
import Sidebar from './Sidebar';

import React from 'react'

const App = () => {
  return (
    <div className='d-flex vh-100'>
  
     <div className='w-20'><Sidebar/></div>
     <div className='w-50 bg-info'>feed</div>
     <div className='w-30'>suggestions</div>


    </div>
  )
}

export default App