import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase()

    return (
        <div className="login-form col-md-12  ">
            <div className="border border-2 m-4 p-4">
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="Your email" id="" />
                    <br />
                    <input className="m-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="contact-btn mt-2" type="submit" value="Submit" />

                </form>

                <p>new to our site? <Link to="/register">Create Account</Link></p>
                <div>-----------------or------------------</div>
                <button onClick={signInUsingGoogle} className="contact-btn">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;