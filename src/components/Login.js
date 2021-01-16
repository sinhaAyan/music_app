import React from 'react'
import './login.css';
import logo from '../images/Logo.png';
import { loginUrl } from '../spotify';
function Login() {
    return (
        <div className="login">
            <img src={logo} alt="logo" />
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}
export default Login
