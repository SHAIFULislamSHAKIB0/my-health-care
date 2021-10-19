import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-form col-md-12 ">
            <div className=" border border-2 m-4 p-4">
                <h2 className="m-2">Create Acount</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email" name="" id="" />
                    <br />
                    <input className="m-2" type="password" placeholder="Your password" name="" id="" />
                    <br />
                    <input type="password" placeholder="Re-enter your password" name="" id="" />
                    <br />
                    <input className="contact-btn ms-2 mt-2" type="submit" value="Submit" />
                </form>

                <p>Already have an account?<Link to="/login"><button className="contact-btn ms-2">LogIn</button></Link></p>
                <div>-----------------or------------------</div>
                <button onClick={signInUsingGoogle} className="contact-btn mb-4">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;