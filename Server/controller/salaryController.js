import { Salary } from '../models/salaryModel.js';

export const getSalaries = async (req, res) => {
    try {
        const data = await Salary.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createSalary = async (req, res) => {
    try {
        await Salary.create(req.body);
        res.status(201).json({ message: 'Salary record created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
