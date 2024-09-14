import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: '', description: '', date: '', location: ''
  });

  const handleChange = e => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/events/create', eventData)  // <--- Changed to relative URL
      .then(() => alert('Event created'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={handleChange} placeholder="Event Title" />
      <input type="text" name="description" onChange={handleChange} placeholder="Description" />
      <input type="datetime-local" name="date" onChange={handleChange} />
      <input type="text" name="location" onChange={handleChange} placeholder="Location" />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
