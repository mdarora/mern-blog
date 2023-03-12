import React, { useContext, useState } from 'react';
import {useHistory} from "react-router-dom";
import LoginContext from '../contexts/LoginContext';

const Login = () => {

    const history = useHistory();

    const {isloggedin, setIsloggedin, setLoggedUser} = useContext(LoginContext);

    if(isloggedin){
        history.push("/");
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [resText, setResText] = useState("");

    const userLogin = async (e) => {
        e.preventDefault();
        if(!username || !password) {
            return setResText("All fields are required.");
        }

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password})
            });

            const result = await res.json();

            if(result.error){
                return setResText(result.error);
            } else if (result.message){
                setIsloggedin(true);
                setLoggedUser({id: result.user._id, username: result.user.username});
                history.push("/");
            }
        } catch (error) {
            setResText("Something went wrong !");
        }
    }
    return (
    <main className="login-page">
            <form onSubmit={userLogin} className="login-form">
                <h2>Login</h2>
                <div className="login-form-group">
                    <label htmlFor="username">Username</label> <br />
                    <input type="username" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="off" />
                </div>
                <div className="login-form-group">
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" placeholder="Enter your password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                </div>
                <div className="loginResText">
                    <span className="text-danger">{resText}</span>
                </div>
                <div className="login-btn">
                    <button type="submit">Login</button>
                </div>
            </form>
    </main>
    )
}

export default Login
