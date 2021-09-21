import React from 'react';
import { Link } from 'react-router-dom';


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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/write">Write</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
        <div className="profile-search">
            <div className="profile-img">
                <Link to="/profile">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                </Link>
            </div>
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
