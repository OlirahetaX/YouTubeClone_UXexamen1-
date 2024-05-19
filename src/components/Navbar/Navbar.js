import React from 'react'
import './Navbar.css';


const Navbar = () => {

    const menu_icon = "https://cdn.icon-icons.com/icons2/2582/PNG/512/menu_icon_153999.png"
    const logo = "https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"
    const search_icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
    const upload_icon = "https://cdn.iconscout.com/icon/free/png-256/add-video-4941591-4108991.png"
    const notification_icon = "https://st3.depositphotos.com/8089676/32835/v/450/depositphotos_328355014-stock-illustration-notification-bell-icon-black-web.jpg"
    const profile_icon = "https://avatars.githubusercontent.com/u/149025485?v=4"
    
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' src={menu_icon} alt="menu-icon" />
                <img className='logo'   src={logo} alt="logoYT" />
            </div>
            <div className="nav-middle flex-div">
                <div className="input-container flex-div">
                    <input type="text" placeholder='Search' />
                    <button>
                        <img src={search_icon}  alt="Search" />
                    </button>
                </div>
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={notification_icon}alt="" />
                <img className='user-icon' src={profile_icon} alt="user-icon" />

            </div>
        </nav>
    )
}

export default Navbar
