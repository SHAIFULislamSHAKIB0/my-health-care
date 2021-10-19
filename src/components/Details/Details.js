import React from 'react';
import { useParams } from 'react-router';
import './Detailes.css'

const Details = () => {
    const { detailsId } = useParams()
    return (
        <div>
            <h2>This is Details {detailsId}</h2>
        </div>
    );
};

export default Details;