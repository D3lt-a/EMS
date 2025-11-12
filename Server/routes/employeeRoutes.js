const express = require('express');
const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controller/employeeController.js');

const router = express.Router();

router.get('/employees', getEmployees);
router.get('/employee/:id', getEmployeeById);
router.post('/add', createEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/remove/:id', deleteEmployee);

module.exports = router;
