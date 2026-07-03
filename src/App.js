
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';

import React from 'react'
import Suggestions from './Suggestions';

const App = () => {
  return (
    <div className='d-flex vh-100'>
  
     <div className='w-20'><Sidebar/></div>
     <div className='w-50 bg-info'><Feed /></div>
     <div className='w-30'><Suggestions/></div>


    </div>
  )
}

export default App