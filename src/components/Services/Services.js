import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className="container">
                <h3 className="about mt-5">My Services</h3>
                <h2>What Service Provide</h2>
                <p><small>Psychologists provide treatment for depression, anxiety, phobias, panic disorders, <br /> eating disorders, stress related problems, relationship problems, and severe mental disorders.</small></p>
            </div>
            <div className="row">
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }

            </div>


        </div>
    );
};

export default Services;