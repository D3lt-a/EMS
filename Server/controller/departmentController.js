const e = require('express');
const Department = require('../models/departmentModel.js');

const getDepartments = async (req, res) => {
    try {
        const data = await Department.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createDepartment = async (req, res) => {
    try {
        await Department.create(req.body);
        res.status(201).json({ message: 'Department created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error creating department',error: err.message });
    }
};

module.exports = {
    getDepartments,
    createDepartment,
};