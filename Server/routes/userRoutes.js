const express = require('express');
const { register, login, remove } = require('../controller/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.delete('/users/:userId', remove);

module.exports = router;