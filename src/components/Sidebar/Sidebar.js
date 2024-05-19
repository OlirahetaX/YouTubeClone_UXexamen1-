import React from 'react'
import './Sidebar.css'


const Sidebar = () => {

    const principal = "https://endlessicons.com/wp-content/uploads/2012/11/home-icon.png"
    const shorts = "https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
    const Suscripciones = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLilHGRaCczMjeZspzSGg9p77hrrrpwB-efQ&usqp=CAU"
    const tuCanal = "https://cdn.icon-icons.com/icons2/3237/PNG/512/channel_user_channel_user_youtube_video_media_social_media_icon_197285.png"
    const historial = "https://cdn.icon-icons.com/icons2/1369/PNG/512/-history_89998.png"
    const playlists = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAclBMVEX///8AAADx8fFAQECioqLu7u5nZ2d8fHy1tbXf39/6+voGBgbc3Nw7OzvW1tbExMRdXV3MzMzo6OgqKip2dnatra1KSkqLi4u4uLiTk5McHBycnJxLS0u/v78mJiaoqKh7e3tkZGQyMjIWFhaGhoZUVFSU7oVsAAADRElEQVR4nO3d21YTQRCFYYpTRgMCclABQVHe/xXVsIKVyRy6q2ump6r2f29Wf8uLjZkePDiy3/Xng/zIQR/ghhtuuOGG23Bwww033HDDbTm44YYbbrjhthzccMMNN9xwWw7uWO4zgfvYfg+HAjdCCCGEEEIIIYQQQgghhBBCkTpx0EeBu/YzXI0kz4Frn1mjqM/94YYbbrjhhttycMMNN9xww205uOGGG2644bYc3HDDDTfccFsuqlvyHPjQQQI2QgghhBBCqCjJ7VsP3d7UPkGdGqKL2meo0V83nQb8N2ez+Y7htvYxZu/NTY+S/3XLcs32a6VvtU8yb+9uuv5U+yxz1rBvEleBxpy7I03arpsuo0xayx1m0vbcdBdi0vbdMSaty033/iet0x1g0nrctP4u+bTTBdb9N9jnlk1a74dVLNctmbTZMOmt8910l/vsfy5MRhJ39qTNQ8lK5qanrEmbRZKX0E10kzFpMzhyE7uJ0idtckV+BW66PInpJnoO6qbzpEmbVCCr0E30Jaibnq5iuhMmbarDF6ThJvoa1D0yaZOcvCwlN9FxUPfQpOkfuzg998CkaR9aIU033fdMmvKZNVJ1902a6ol1UnZ3T5riebVSd9Pj/qTpHVctfXfHpGkdVrEp3HR+FtNN9Duom9ZXMd0719/KP0y96dxETVD3+10BlQ/TbVL39sGK0odpNrH77fqb1odpNrF78yP7aoFN7m5t+bLTc/f923SZqblTvl5fUEru9g/qi0/Hnfj4bEFpuC1eai13y2581a7Y/cPmDb9Ct9kbnWVuuzd4S9zZ19sWVIHb3nixxG6L48WSuq2/gSNzGx0vlsTt4Q07gdvueLGy3U5eN8p1e3m9LM/90/Z4sbLc1seLleFe1T6rZsnuFwfjxUp1P9Q+qHJp7iMf48VKcnsZL1aC2+Wvdxl1rx2NF2vMbemZV07D7hdrj0GSG3R7Gy/WgNv17y7qdzfjf9hwfe6e1+Td1O3+ZeoZvqROt9fxYnW4/Y4Xa9899L6Qn9ruV8/jxWq5fY8Xa8ftfbxYzG3rAlph/93GLqAVtnWbu4BWWBNpvFgb96vHb5KG++ceeZndZU3W7+Px04XmeP0BF/l0xdRHcPkAAAAASUVORK5CYII="
    const tusVideos = "https://cdn.worldvectorlogo.com/logos/play-icon.svg"
    const verMasTarde = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKmL3tRj6fvGt6YxMlyUp25DvvqUK1laZdg&usqp=CAU"
    const videoQueGustan = "https://icons.iconarchive.com/icons/iconsmind/outline/512/Like-icon.png"
    const tusClips = "https://cdn-icons-png.flaticon.com/512/541/541957.png"
    const sub1 = "https://yt3.googleusercontent.com/ytc/AIdro_nhjfsQXViLvnCoADKDh3FCEmQgWNxOB19HhOCRjmyCfoI=s900-c-k-c0x00ffffff-no-rj"
    const sub2 = "https://yt3.googleusercontent.com/itg6InC3mG_vz82zABL--M82TUZWN8tM2Nj5wNnzIxb3nB54PW5yXPCHf5f4aSNT4XZEAtr2=s900-c-k-c0x00ffffff-no-rj"
    const sub3 = "https://yt3.googleusercontent.com/0s0wKMOurM0CQnE0x0vvKvyKc9Vg6KyekVZn926aQ5tEEg1iTRq0PHzYq1fZ8Z-c4os2rRZlBA=s900-c-k-c0x00ffffff-no-rj"
    const sub4 = "https://yt3.googleusercontent.com/0WEZah2NwDad9hVOL3bLnuivbhNXUJrMSuj9xAC-JgCuUBCCZKOwzKGlXOZox2LKmOD0d9hmuKY=s900-c-k-c0x00ffffff-no-rj"
    const sub5 = "https://yt3.googleusercontent.com/ytc/AIf8zZQocz98BdobiH6EeSlv0t9EzUf_BtWkKJnpuI1eSw=s900-c-k-c0x00ffffff-no-rj"

    return (
        <div>
            <div className='sideBar'>
                <div className="sortcut-links">
                    <div className="side-link">
                        <img src={principal} alt="principal" style={{ width: 50, marginRight: 0 }} /><p>Principal</p>
                    </div>
                    <div className="side-link">
                        <img src={shorts} alt="shorts" /><p>Shorts</p>
                    </div>
                    <div className="side-link">
                        <img src={Suscripciones} alt="Suscripciones" /><p>Suscripciones</p>
                    </div>
                    <hr />
                    <h3>Tú    &gt;</h3> <br />
                    <div className="side-link">
                        <img src={tuCanal} alt="tuCanal" /><p>Tu canal</p>
                    </div>
                    <div className="side-link">
                        <img src={historial} alt="historial" /><p>Historial</p>
                    </div>
                    <div className="side-link">
                        <img src={playlists} alt="playlists" /><p>Playlists</p>
                    </div>
                    <div className="side-link">
                        <img src={tusVideos} alt="tusVideos" /><p>Tus videos</p>
                    </div>
                    <div className="side-link">
                        <img src={verMasTarde} alt="verMasTarde" /><p>Ver mas tarde</p>
                    </div>
                    <div className="side-link">
                        <img src={videoQueGustan} alt="videoQueGustan" /><p>Videos que me gu...</p>
                    </div>
                    <div className="side-link">
                        <img src={tusClips} alt="tusClips" /><p>Tus clips</p>
                    </div>
                    <hr />
                </div>
                <div className="suscribed-list">
                    <h3>Suscripciones</h3>
                    <div className="side-link">
                        <img src={sub1} alt="sub1" className="" /><p>8cho</p>
                    </div>
                    <div className="side-link">
                        <img src={sub2} alt="sub1" className="" /><p>Adrian Saenz</p>
                    </div>
                    {/*
                    <div className="side-link">
                        <img src={sub3} alt="sub1" className="" /><p>Alex Hernandez</p>
                    </div>
                    <div className="side-link">
                        <img src={sub4} alt="sub1" className="" /><p>Alex Meyers en Esp..</p>
                    </div>
                    <div className="side-link">
                        <img src={sub5} alt="sub1" className="" /><p>ANGELA YELIN</p>
    </div>*/}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
