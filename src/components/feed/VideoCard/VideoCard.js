import React from 'react'
import './VideoCard.css'  

const VideoCard = ({ linkimg, titulo, canal, views, time, linkvid,titleImg }) => {

    return (
        <div className='card' >
            <a href={linkvid} target="_blank" rel="noopener noreferrer">
                <img src={linkimg} alt="" />
            </a>
            <div className='card-content'>
            <div className='title-section'>
                    {titleImg && <img src={titleImg} alt="Title Icon" className='title-img' />}
                    <h2>{titulo}</h2>
                </div>
                <h3>{canal}</h3>
                <p>{views} &bull; {time}</p>
            </div>
        </div>
    )
}

export default VideoCard