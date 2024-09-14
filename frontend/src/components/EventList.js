import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')  // <--- Changed to relative URL
      .then(response => setEvents(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            {event.title} - {new Date(event.date).toLocaleString()}
            <ul>
              {event.attendees.map(attendee => (
                <li key={attendee._id}>{attendee.name} ({attendee.email})</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
