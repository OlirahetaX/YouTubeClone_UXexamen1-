import React from 'react'
import './Shorts.css'

const Shorts = ({ linkimg, titulo, canal, views, time, linkvid, titleImg }) => {

    return (
        <div className='Shortcard' >
            <a href={linkvid} target="_blank" rel="noopener noreferrer">
                <img src={linkimg} alt="" />
            </a>
            <div className='Shortcard-content'>
                <div className='Shorttitle-section'>
                    {titleImg && <img src={titleImg} alt="Title Icon" className='Shorttitle-img' />}
                    <h2>{titulo}</h2>
                </div>
                <h3>{canal}</h3>
                <p>{views} &bull; {time}</p>
            </div>
        </div>
    )
}

export default Shorts