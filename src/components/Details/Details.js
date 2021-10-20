import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Detailes.css'

const Details = () => {
    const { detailsId } = useParams()

    const [service, setService] = useState([]);
    // console.log(service)

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const clickedService = service.find(sv => sv.id === parseInt(detailsId))


    return (
        <div className="container col-md-10">
            <div className="cart my-services p-3 m-2 mb-5">
                <div>
                    <img className="w-75" src={clickedService?.img} alt="" />
                </div>
                <h3 className="mt-4">{clickedService?.name}</h3>
                <p>{clickedService?.des}</p>
                <button className="contact-btn">Book-Services</button>
            </div>
        </div>
    );
};

export default Details;