import React from 'react';
import './Banner.css';
import img from '../../../images/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="header-container">
                <div className="banner-container">
                    <div className="row d-flex align-items-center justify-content-center">

                        <div className="col-md-6 p-4">
                            <h1 className="title">
                                Be Smart, Help YourSelf Now
                            </h1>
                            <h6 className="consultation mt-3">Free Consultation</h6>
                            <p className="my-text text-center mt-3">
                                Counselling and phychotherapy for individuals,Couples and families.
                            </p>
                            <button className="mt-3 contact-btn ">Contact us</button>
                        </div>
                        <div className="col-md-6">
                            <img className="w-100 " src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;