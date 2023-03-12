import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import LoginContext from '../contexts/LoginContext';


const Navbar = () => {

    const history = useHistory();

    const {isloggedin, setIsloggedin} = useContext(LoginContext);

    const userLogout = async () =>{
        await fetch("/api/auth/logout");
        setIsloggedin(false);
        history.push("/login");
    }
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

                {isloggedin ? <> 
                    <li><Link to="/write">Write</Link></li>
                    <li onClick={userLogout}><span>Logout</span></li>
                </> : <> 
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </>}
            </ul>
        </div>
        <div className="profile-search">
            {isloggedin ? 
                <div className="profile-img">
                    <Link to="/profile">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                    </Link>
                </div> : null
            }
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
