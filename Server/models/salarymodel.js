import db from '../config/db.js';

export const Salary = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Salary');
        return rows;
    },

    create: async (data) => {
        const { employeeNumber, month, GrossSalary, TotalDeduction } = data;
        await db.query(
            'INSERT INTO Salary (employeeNumber, month, GrossSalary, TotalDeduction) VALUES (?, ?, ?, ?)',
            [employeeNumber, month, GrossSalary, TotalDeduction]
        );
    },
};
