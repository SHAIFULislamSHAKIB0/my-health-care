import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import './Service.css'

const Service = (props) => {
    console.log(props.service)
    const { id, name, img, des } = props.service;

    const description = des.slice(0, 70)
    return (
        <div className="col-md-4 col-sm-12 container ">
            <div className="cart my-services p-3 m-2">
                <div>
                    <img className="images" src={img} alt="" />
                </div>
                <h4 className="mt-2">{name}</h4>
                <p>{description}...</p>
                <Link to={`/details/${id}`}><button className="contact-btn">Details</button></Link>
            </div>
        </div>
    );
};

export default Service;