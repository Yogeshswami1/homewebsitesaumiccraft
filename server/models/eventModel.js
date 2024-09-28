import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  description: { type: String },
  link: { type: String },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
