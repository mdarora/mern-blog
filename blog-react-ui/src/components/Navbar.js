import React from 'react'

const Navbar = () => {
    return (
    <nav>
        <div className="socials">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <div className="nav-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Write</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </div>
        <div className="profile-search">
            <div className="profile-img">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            </div>
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
