import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('./events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className="mb-4 mt-4">
            <h5 className="about">Upcoming events</h5>
            <h2 className="mb-4">My Programs</h2>
            <div className="row">
                {
                    events.map(event => <Event key={event.id} event={event}></Event>)
                }

            </div>
        </div>
    );
};

export default Events;