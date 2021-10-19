import React from 'react';
import './MenuBar.css'

import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="row menubar-container">
                <div className="row">
                    <div className="col-md-2 col-lg-2 col-sm-12">
                        <div className="logo  p-3 container">
                            <Link to="/home" className="mylogos"><h4 className>SHAKIB'S <small className="name-style">psychologist</small></h4></Link>
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10 col-sm-12">
                        <div className="menu-items mt-4 ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="nav-link"><li className="items m-2 p-2">Home</li></Link>
                                <Link to="/aboutme" className="nav-link"><li className="items m-2 p-2 ">About</li></Link>
                                <Link to="/services" className="nav-link"><li className="items m-2 p-2">Services</li></Link>
                                <Link to="/events" className="nav-link"><li className="items m-2 p-2">Events</li></Link>
                                <Link to="/workprocess" className="nav-link"><li className="items m-2 p-2">WorkProcess</li></Link>


                                {
                                    user.email ? <button className="items m-2 nav-link" onClick={logOut}>log Out</button> :
                                        <Link to="/login" className="nav-link"><li className="items m-2 p-2">Login</li></Link>
                                }
                                {user.email && <span className="items m-2 p-2" style={{ color: 'black' }}> <small>This is: {user.displayName}</small> </span>}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;