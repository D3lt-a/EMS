const express = require('express');
const { getSalaries, createSalary } = require('../controller/salaryController');

const router = express.Router();

router.get('/salaries', getSalaries);
router.post('/create', createSalary);

module.exports = router;
