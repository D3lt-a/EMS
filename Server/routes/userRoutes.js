const express = require('express');
const router = express.Router();
const { register, login, remove } = require('../controller/userController');

router.post('/register', register);
router.post('/login', login);
router.delete('/user/:userId', remove);

module.exports = router;