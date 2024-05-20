import React from 'react'
import './Home.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Recbar from '../components/Recbar/Recbar'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (

    <div class="main-container">
      <div class="top-section">
        <Navbar/>
      </div>
      <div class="bottom-section">
        <div class="left">
          <Sidebar/>
        </div>
        <div class="right">
          <div class="top-right">
            <Recbar/>
          </div>
          <div class="bottom-right">
            VIDEOS
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home