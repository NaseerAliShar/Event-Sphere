import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import EventCard from './EventCard';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function FilterEvent() {
    const [data, setData] = useState('');
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleChange = (e) => {
        setData(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className='h-max py-10'>
            <div className='text-center'>
                <h1 className='text-xl font-semibold'>Filter Events</h1>
                <select
                    name=""
                    id=""
                    className='border-2 rounded border-blue-500'
                    onChange={handleChange}>
                    <option value="">All</option>
                    {months.map((month, index) => (
                        <option key={index} value={index + 1}>{month}</option>
                    ))}
                </select>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {events.filter(event => {
                    if (!data) return true;
                    const eventMonth = format(new Date(event.date), 'M');
                    return parseInt(eventMonth) === parseInt(data);
                }).map(event => (
                    <EventCard key={event._id} event={event} />
                ))}
            </div>
        </div>
    );
}

export default FilterEvent;
