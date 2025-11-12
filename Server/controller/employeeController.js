const Employee = require('../models/employeemodel');
// Get all employees
const getEmployees = async (req, res) => {
    try {
        const data = await Employee.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
    try {
        const emp = await Employee.getById(req.params.id);
        if (!emp) return res.status(404).json({ message: 'Employee not found' });
        res.json(emp);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create employee
const createEmployee = async (req, res) => {
    try {
        await Employee.create(req.body);
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error('An error occurred while creating an employee:', err);
    }
};

// Update employee
const updateEmployee = async (req, res) => {
    try {
        await Employee.update(req.params.id, req.body);
        res.json({ message: 'Employee updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete employee
const deleteEmployee = async (req, res) => {
    try {
        await Employee.delete(req.params.id);
        res.json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};