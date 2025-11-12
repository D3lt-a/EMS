const express = require('express');
const { getDepartments, createDepartment } = require('../controller/departmentController');
const router = express.Router();

router.get('/departments', getDepartments);
router.post('/create', createDepartment);

module.exports = router;
