import express from 'express';
import { subscribeNewsletter, getSubscribedEmails } from '../controllers/newsletterController.js';

const router = express.Router();

// Route to handle subscription
router.post('/subscribe', subscribeNewsletter);

// Route to get all subscribed emails
router.get('/emails', getSubscribedEmails);

export default router;
