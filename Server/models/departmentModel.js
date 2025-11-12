const database = require('../config/database');
const Department = {
    getAll: async () => {
        const [rows] = await database.query('SELECT * FROM Department');
        return rows;
    },

    create: async (data) => {
        const { DepartementCode, DepartementName, GrossSalary, TotalDeduction } = data;
        await database.query(
            'INSERT INTO Department (DepartementCode, DepartementName, GrossSalary, TotalDeduction) VALUES (?, ?, ?, ?)',
            [DepartementCode, DepartementName, GrossSalary, TotalDeduction]
        );
    },
};

module.exports = Department;