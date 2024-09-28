import Event from '../models/eventModel.js';

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new event
export const createEvent = async (req, res) => {
  const { title, subtitle, date, time, venue, description, link } = req.body;
  const newEvent = new Event({ title, subtitle, date, time, venue, description, link });

  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Delete an event by ID
export const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
      await Event.findByIdAndDelete(id);  // Updated method
      res.status(200).json({ message: 'Event deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  