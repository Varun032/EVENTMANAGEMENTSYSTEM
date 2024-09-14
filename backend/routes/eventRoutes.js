const express = require('express');
const Event = require('../models/event');
const User = require('../models/user');
const router = express.Router();

// Create Event
router.post('/create', async (req, res) => {
  const { title, description, date, location } = req.body;
  const event = new Event({ title, description, date, location });
  await event.save();
  res.send('Event created');
});

// RSVP to an Event
router.post('/:eventId/rsvp', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  const event = await Event.findById(req.params.eventId);
  event.attendees.push(user._id);
  await event.save();
  res.send('RSVP successful');
});

// List all Events
router.get('/events', async (req, res) => {
  const events = await Event.find().populate('attendees');
  res.json(events);
});

// Delete Event
router.delete('/:eventId', async (req, res) => {
  await Event.findByIdAndDelete(req.params.eventId);
  res.send('Event deleted');
});

module.exports = router;
