import React from 'react'

const Sidebar = () => {
    return (
    <aside className="sidebar">
        <div className="sidebar-about-me">
            <h4 className="sidebar-title">ABOUT ME</h4>
            <center>
                <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Sidebar user img" />
            </center>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet eius libero at esse, nostrum maiores?</p>
        </div>
        <div className="sidebar-categories">
            <h4 className="sidebar-title">CATEGORIES</h4>
            <ul>
                <li>Life</li>
                <li>Music</li>
                <li>Style</li>
                <li>Sport</li>
                <li>Tech</li>
                <li>Cinema</li>
            </ul>
        </div>
        <div className="sidebar-socials">
            <h4 className="sidebar-title">FOLLOW US</h4>
            <div className="sidebar-social-icons">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-linkedin"></i>
            </div>
        </div>
    </aside>
    )
}

export default Sidebar
