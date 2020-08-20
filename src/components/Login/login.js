import React from 'react'
import './login.css'

function Login() {
    return (
        <div className="login-form">
            <h3>Welcome back</h3>
            <form>
                <div className="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" required aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" required placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
        </div>
    )
}

export default Login
