import React from 'react'
import './Home.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Recbar from '../components/Recbar/Recbar'
import Navbar from '../components/Navbar/Navbar'
import Feed from '../components/feed/Feed'
import FeedShorts from '../components/FeedShorts/FeedShorts'

const Home = () => {
  return (

    <div class="main-container">
      <div class="top-section">
        <Navbar />
      </div>
      <div class="bottom-section">
        <div class="left">
          <Sidebar />
        </div>
        <div class="right">
          <div class="top-right">
            <Recbar />
          </div>
          <div class="bottom-right">
            <div className='ccontainer'>
              <Feed /><br /><br />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2>Shorts</h2>
                <img
                  src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
                  style={{ borderRadius: "20px", width: "50px", height: "50px", marginLeft: "10px" }}
                  alt="Shorts Icon"
                />
              </div>

              <br />
              <FeedShorts />
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home
