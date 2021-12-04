const express = require('express');
const router = express.Router();
const { sendMessage, getMessage } = require('../controllers/chat.js');

// localhost:8080/chat

router.post('/send-message', sendMessage); //
router.get('/get-message', getMessage); //

module.exports = router;
