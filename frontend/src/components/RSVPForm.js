import React, { useState } from 'react';
import axios from 'axios';

const RSVPForm = ({ eventId }) => {
  const [userData, setUserData] = useState({ name: '', email: '' });

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`/api/events/${eventId}/rsvp`, userData)  // <--- Changed to relative URL
      .then(() => alert('RSVP successful'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Your Name" />
      <input type="email" name="email" onChange={handleChange} placeholder="Your Email" />
      <button type="submit">RSVP</button>
    </form>
  );
};

export default RSVPForm;
