// src/components/EditEvent.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        try {
            await axios.put(`http://localhost:3000/api/events/${id}`, data);
            navigate(`/events/${id}`);
        } catch (error) {
            setError('Error updating event. Please try again.');
            console.error('Error updating event:', error);
        }
    };

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/events/${id}`);
                const event = response.data;
                setValue('title', event.title);
                setValue('date', event.date.slice(0, 10)); // Extract yyyy-mm-dd format
                setValue('location', event.location);
                setValue('description', event.description);
                setValue('theme', event.theme);
            } catch (error) {
                setError('Error fetching event details. Please try again.');
                console.error('Error fetching event details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id, setValue]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="container mx-auto bg-blue-200 flex flex-col items-center justify-center p-5">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                {...register('title', { required: 'Title is required' })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                {...register('date', { required: 'Date is required' })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                {...register('location', { required: 'Location is required' })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                {...register('description', { required: 'Description is required' })}
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="4"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="theme">Theme</label>
                            <input
                                type="text"
                                id="theme"
                                {...register('theme', { required: 'Theme is required' })}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditEvent;
