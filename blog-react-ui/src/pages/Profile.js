import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import LoginContext from '../contexts/LoginContext';

const Profile = () => {

    const history = useHistory();
    const {isloggedin} = useContext(LoginContext);

    if(!isloggedin){
        history.push("/login");
    }

    return (
    <main className="profile-page">
        <form className="profile-form">
            <div className="profile-head-titles">
                <h2>Update Your Account</h2>
                <h6>Delete Account</h6>
            </div>
            <div className="profile-form-group">
                <label htmlFor="profile-pic">Profile Picture</label> <br />
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="profile-img" width="100" height="100" />
            </div>
            <div className="profile-form-group">
                <label htmlFor="username">Username</label> <br />
                <input type="text" placeholder="mdarora" autoComplete="off" readOnly/>
            </div>
            <div className="profile-form-group">
                <label htmlFor="email">Email</label> <br />
                <input type="email" placeholder="mdarora@md.com" autoComplete="off" readOnly/>
            </div>
            <div className="profile-form-group">
                <label htmlFor="password">Password</label> <br />
                <input type="password"  id="password" autoComplete="off" readOnly/>
            </div>

            <div className="profile-submit-button">
                <button type="submit">Update</button>
            </div>
        </form>
        <Sidebar></Sidebar>
    </main>
    )
}

export default Profile
