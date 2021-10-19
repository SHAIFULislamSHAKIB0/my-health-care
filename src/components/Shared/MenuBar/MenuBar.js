import React from 'react';
import './MenuBar.css'
import logo from '../../../images/logo.jpg'
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div>
            <div className="row menubar-container">
                <div className="col-md-4 col-lg-2">
                    <div className="logo  p-3 container">
                        <Link to="/home" className="mylogos"><h4 className>SHAKIB'S <small className="name-style">psychologist</small></h4></Link>
                    </div>
                </div>
                <div className="col-md-8 col-lg-10 col-sm-12">
                    <div className="menu-items mt-4 ">
                        <ul className="d-flex align-items-end justify-content-end">
                            <Link to="/home" className="nav-link"><li className="items m-2 p-2">Home</li></Link>
                            <Link to="/aboutme" className="nav-link"><li className="items m-2 p-2 ">About</li></Link>
                            <Link to="/services" className="nav-link"><li className="items m-2 p-2">Services</li></Link>
                            <Link to="/workprocess" className="nav-link"><li className="items m-2 p-2">Process</li></Link>
                            <Link to="/login" className="nav-link"><li className="items m-2 p-2">Login</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;