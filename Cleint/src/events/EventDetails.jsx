// src/components/EventDetails.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { FaMapMarkerAlt, FaCalendarAlt, FaPalette } from 'react-icons/fa';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        fetchEvent();
    }, [id]);

    const handleUpdate = () => {
        navigate(`/events/${id}/edit`);
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                await axios.delete(`http://localhost:3000/api/events/${id}`);
                navigate('/events');
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        }
    };

    if (!event) {
        return <div>Loading...</div>;
    }

    const formattedDate = format(new Date(event.date), 'MMMM dd, yyyy');

    return (
        <div className="container mx-auto h-screen bg-blue-200 flex flex-col items-center justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
                <div className="bg-cover h-64" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
                    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                        <h2 className="text-4xl text-white font-bold">{event.title}</h2>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="text-gray-700 mb-4 flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{formattedDate}</span>
                    </div>
                    <div className="text-gray-700 mb-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{event.location}</span>
                    </div>
                    <div className="text-gray-700 mb-4 flex items-center">
                        <FaPalette className="mr-2" />
                        <span>{event.theme}</span>
                    </div>
                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            onClick={handleUpdate}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
