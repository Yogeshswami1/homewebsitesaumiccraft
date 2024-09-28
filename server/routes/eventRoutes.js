import express from 'express';
import { getEvents, createEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

router.get('/', getEvents); // Get all events
router.post('/', createEvent); // Add new event
router.delete('/:id', deleteEvent); // Delete event by id

export default router;
