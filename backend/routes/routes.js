const express = require('express');
const contactHandler = require('../handler/contact');
const eventHandler = require('../handler/eventHandler');
// const limiter = require('../config/limiter')

const router = express.Router();

// Contact Us route
router.post('/contact', contactHandler.sendMessage);

// Event Registration route
router.post('/register',eventHandler.registerForEvent);

// Get all event registrations
router.get('/events', eventHandler.getAllRegistrations);

module.exports = router;
