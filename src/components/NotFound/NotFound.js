import React from 'react';
import './NotFound.css'
import image from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <img className="w-100" src={image} alt="" />
        </div>
    );
};

export default NotFound;