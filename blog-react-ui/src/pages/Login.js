import React from 'react'

const Login = () => {
    return (
    <main className="login-page">
            <form className="login-form">
                <h2>Login</h2>
                <div className="login-form-group">
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" placeholder="Enter your email" autoComplete="off" />
                </div>
                <div className="login-form-group">
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" placeholder="Enter your password" id="password" autoComplete="off" />
                </div>
                <div className="login-btn">
                    <button type="submit">Login</button>
                </div>
            </form>
    </main>
    )
}

export default Login
