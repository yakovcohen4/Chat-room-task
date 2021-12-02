const express = require('express');
const router = express.Router();
const { register } = require('../controllers/users.js');

// localhost:8080/users

router.post('/register', register);

module.exports = router;
