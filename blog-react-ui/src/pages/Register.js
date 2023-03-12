import React, { useContext, useState } from 'react';
import {useHistory} from "react-router-dom";
import LoginContext from '../contexts/LoginContext';

const Register = () => {

    const history = useHistory();

    const {isloggedin} = useContext(LoginContext);

    if(isloggedin){
        history.push("/");
    }
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [resText, setResText] = useState('');

    const registerUser = async (e) =>{
        e.preventDefault();

        if(!email || !username || !password){
            return setResText("All fields are required.");
        }
        
        try {
            const res = await fetch("/api/auth/register",{
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, email, password})
            });

            const result = await res.json();

            if(result.error){
                return setResText(result.error);
            } else if (result.message){
                setResText(result.message);
                history.push("/login");
            }
        } catch (error) {
            return setResText("Something went wrong");
        }
    }


    return (
<main className="register-page">
    <form onSubmit={registerUser} className="register-form">
        <h2>Register</h2>
        <div className="register-form-group">
            <label htmlFor="username">Username</label> <br />
            <input type="text" id="username" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} autoComplete="off" />
        </div>
        <div className="register-form-group">
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" />
        </div>
        <div className="register-form-group">
            <label htmlFor="password">Password</label> <br />
            <input type="password" placeholder="Enter your password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" />
        </div>
        <div className="register-ResText">
            <span className="text-danger">{resText}</span>
        </div>
        <div className="register-btn">
            <button type="submit">Register</button>
        </div>
    </form>
</main>
    )
}

export default Register
