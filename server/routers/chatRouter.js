const express = require('express');
const router = express.Router();
const { sendMessage, getAllMessages } = require('../controllers/chat.js');

// localhost:8080/chat

router.post('/send-message', sendMessage); //
router.get('/get-all', getAllMessages); //

module.exports = router;
