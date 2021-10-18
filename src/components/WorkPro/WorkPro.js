import React from 'react';
import './WorkPro.css'

const WorkPro = (props) => {
    console.log(props.process)
    const { step, img, name, des } = props.process;
    return (
        <div className="col-md-4 col-sm-12 container ">
            <div className="cart my-services p-3 m-2 ">
                <div>
                    <img className="images" src={img} alt="" />
                </div>
                <h6 className="mt-2">Step: {step}</h6>
                <h4 className="mt-2">{name}</h4>
                <p>{des}</p>
                <button className="contact-btn">Details</button>
            </div>

        </div>
    );
};

export default WorkPro;