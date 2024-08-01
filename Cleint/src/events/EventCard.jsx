// src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { FaMapMarkerAlt, FaCalendarAlt, FaPalette } from 'react-icons/fa';

const EventCard = ({ event }) => {
  const formattedDate = format(new Date(event.date), 'MMMM dd, yyyy');

  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden w-96 m-4 flex flex-col justify-between h-full" role="article">
      <div className="p-4 flex-grow">
        <header className="mb-4" role="heading" aria-level="3">
          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.description}</p>
        </header>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FaCalendarAlt className="mr-2 text-gray-600" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-gray-600" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center">
            <FaPalette className="mr-2 text-gray-600" />
            <span>{event.theme}</span>
          </div>
        </div>
      </div>
      <footer className="p-4 border-t border-gray-200 bg-gray-50 mt-auto">
        <Link to={`/events/${event._id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </footer>
    </article>
  );
};

export default EventCard;
