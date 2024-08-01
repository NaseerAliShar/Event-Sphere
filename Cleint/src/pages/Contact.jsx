// src/pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/contact', formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Error sending message. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-6 bg-blue-200 flex flex-col w-2/5 items-center h-screen">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full p-6">
                <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Send Message
                        </button>
                    </div>
                    {status && (
                        <div className={`mt-4 ${status.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                            {status}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
