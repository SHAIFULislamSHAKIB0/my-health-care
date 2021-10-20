import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {

    faPhone,
    faMap,
    faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Footer = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <div className="left-container text-start">
                                <h1>SHAKIB'S CARE</h1>
                                <div className="icons-container d-flex text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12">
                            <div className="right-footer-container">

                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div>
                                        <h5>+8801816800887</h5>
                                        <h6>shaifulshakib560@gmail.com</h6>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center mt-2">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMap} />
                                    </div>
                                    <div>
                                        <p>
                                            Narayanhat,Fatikchari
                                            <br /> Chittagong,Bangladesh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-12">
                            <div className="footer-menu-container">
                                <ul>
                                    <Link to="/home" className="nav-link"><li className="items p-2">Home</li></Link>
                                    <Link to="/aboutme" className="nav-link"><li className="items  p-2 ">About</li></Link>
                                    <Link to="/services" className="nav-link"><li className="items  p-2">Services</li></Link>
                                    <Link to="/events" className="nav-link"><li className="items m-2 p-2">Events</li></Link>
                                    {
                                        user.email ? <Button onClick={logOut} variant="light">LogOut</Button> :
                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* right of my web */}
                    </div>
                    <p className="">
                        <small>SHAKIB'S © . All rights reserved.</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;