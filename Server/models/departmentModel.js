import db from '../config/db.js';

export const Department = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Department');
        return rows;
    },

    create: async (data) => {
        const { DepartementCode, DepartementName, GrossSalary, TotalDeduction } = data;
        await db.query(
            'INSERT INTO Department (DepartementCode, DepartementName, GrossSalary, TotalDeduction) VALUES (?, ?, ?, ?)',
            [DepartementCode, DepartementName, GrossSalary, TotalDeduction]
        );
    },
};
