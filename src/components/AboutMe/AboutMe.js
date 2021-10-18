import React from 'react';
import './AboutMe.css';
import images from '../../images/about.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className="mt-4 ">
                <div className="mySection-container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6">
                            <img className="w-100" src={images} alt="" />
                        </div>

                        <div className="col-md-6 p-4">
                            <h6 className="about">About me</h6>
                            <h1 className="title">
                                Professional Psychology Therapy
                            </h1>
                            <br />

                            <h6 className="mt-3">Counseling psychology is a general practice and health service provider specialty in professional psychology.</h6>
                            <p className="my-text text-center mt-3">
                                Counseling psychology addresses the emotional, social, work, school and physical health concerns people may have at different stages in their lives, focusing on typical life .
                            </p>
                            <button className="mt-3 contact-btn more-about ">More about me..</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;