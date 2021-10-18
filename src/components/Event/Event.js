import React from 'react';
import './Event.css'

const Event = (props) => {
    console.log(props.event)
    const { On, name, img, des } = props.event;

    return (
        <div className="col-md-4 col-sm-12 container ">
            <div className="cart my-services p-3 m-2">
                <div>
                    <img className="images" src={img} alt="" />
                </div>
                <p>{On}</p>
                <h4 className="mt-2">{name}</h4>
                <p>{des}</p>
                <button className="contact-btn">See more</button>
            </div>
        </div>
    );
};

export default Event;