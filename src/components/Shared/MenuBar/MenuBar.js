import React from 'react';
import './MenuBar.css'
import logo from '../../../images/logo.jpg'

const MenuBar = () => {
    return (
        <div>
            <div className="row menubar-container">
                <div className="col-md-2 col-lg-2 col-sm-12">
                    <div className="logo  p-3 container">
                        <h4 className>SHAKIB'S<h6 className="name-style"><small>psychologist</small></h6></h4>
                    </div>
                </div>
                <div className="col-md-10 col-lg-10 col-sm-12">
                    <div className="menu-items me-5 mt-3">
                        <ul className="d-flex align-items-end justify-content-end">
                            <li className="items m-2 p-2">Home</li>
                            <li className="items m-2 p-2">Shop</li>
                            <li className="items m-2 p-2">Contact</li>
                            <li className="items m-2 p-2">About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;