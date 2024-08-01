import Event from '../models/event.js';

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }
    res.send(event);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }
    res.send(event);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }
    res.send({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export default { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent };
