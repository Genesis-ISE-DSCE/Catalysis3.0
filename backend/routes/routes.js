const express = require('express');
// const contactHandler = require('../handler/contact');
const eventHandler = require('../handler/eventHandler');

const router = express.Router();

// Contact Us route
// router.post('/contact', contactHandler.sendMessage);

// Event Registration route
router.post('/register', eventHandler.registerForEvent);

module.exports = router;