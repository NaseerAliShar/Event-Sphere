// src/components/EventList.js
import React, { useEffect, useState } from 'react';
import { EventCard } from '../index.js';
import axios from 'axios';

const EventList = () => {
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

  return (
    <div className="container mx-auto p-4 h-max">
      <h2 className="text-2xl font-bold mb-4 text-center">Events ({events.length})</h2>
      <div className="flex flex-wrap">
        {events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
