import React from 'react'

const Register = () => {
    return (
<main className="register-page">
    <form className="register-form">
        <h2>Register</h2>
        <div className="register-form-group">
            <label htmlFor="username">Username</label> <br />
            <input type="text" id="username" placeholder="Enter your username" autoComplete="off" />
        </div>
        <div className="register-form-group">
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" placeholder="Enter your email" autoComplete="off" />
        </div>
        <div className="register-form-group">
            <label htmlFor="password">Password</label> <br />
            <input type="password" placeholder="Enter your password" id="password" autoComplete="off" />
        </div>
        <div className="register-btn">
            <button type="submit">Register</button>
        </div>
    </form>
</main>
    )
}

export default Register
