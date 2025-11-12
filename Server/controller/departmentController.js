import { Department } from '../models/departmentModel.js';

export const getDepartments = async (req, res) => {
    try {
        const data = await Department.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createDepartment = async (req, res) => {
    try {
        await Department.create(req.body);
        res.status(201).json({ message: 'Department created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
