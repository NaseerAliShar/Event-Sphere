// src/pages/About.js
import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    const { role } = useSelector(state => state.auth);
    console.log(role);
    return (
        <div className="container mx-auto p-6 bg-blue-200 flex flex-col items-center w-2/5 h-screen">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full p-6">
                <h1 className="text-3xl font-bold mb-4 text-center">About EventSphere</h1>
                <p className="text-gray-700 mb-4">
                    EventSphere is a comprehensive event management solution designed to simplify the organization and execution of events.
                    Our platform provides tools for managing various aspects of an event, from attendee registration to exhibitor management.
                </p>
                <p className="text-gray-700 mb-4">
                    Whether you are planning a small local event or a large conference, EventSphere offers the features and flexibility you need
                    to ensure a successful event.
                </p>
                <p className="text-gray-700">
                    Our team is dedicated to providing excellent support and continuously improving our platform to meet the needs of our users.
                </p>
            </div>
        </div>
    );
};

export default About;
