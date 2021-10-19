import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    // console.log('came from ', location.state?.from)

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || "/home")
            })
    }

    return (
        <div className="login-form col-md-12  ">
            <div className="border border-2 m-4 p-4">
                <h2>Login</h2>
                <form /* onSubmit="" */>
                    <input type="email" name="" placeholder="Your email" id="" />
                    <br />
                    <input className="m-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="contact-btn mt-2" type="submit" value="Submit" />

                </form>

                <p>new to our site? <Link to="/register">Create Account</Link></p>
                <div>-----------------or------------------</div>
                <button onClick={handleGoogleSignIn} className="contact-btn">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;