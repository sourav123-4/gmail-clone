import React from 'react'
import Slidebar from './Slidebar'
import Homeheader from './Homeheader'
import Main from '../Main'
function Home() {
  return (
    <div className='home'>
      <div className='slidebar-main'>
      <Slidebar/>
      </div>
      <div className='main'>
      <Homeheader/>
      <Main/>
      </div>
    </div>
  )
}

export default Home