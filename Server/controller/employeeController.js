import { Employee } from '../models/employeeModel.js';

// Get all employees
export const getEmployees = async (req, res) => {
    try {
        const data = await Employee.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get employee by ID
export const getEmployeeById = async (req, res) => {
    try {
        const emp = await Employee.getById(req.params.id);
        if (!emp) return res.status(404).json({ message: 'Employee not found' });
        res.json(emp);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create employee
export const createEmployee = async (req, res) => {
    try {
        await Employee.create(req.body);
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update employee
export const updateEmployee = async (req, res) => {
    try {
        await Employee.update(req.params.id, req.body);
        res.json({ message: 'Employee updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete employee
export const deleteEmployee = async (req, res) => {
    try {
        await Employee.delete(req.params.id);
        res.json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
