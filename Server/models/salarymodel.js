const database = require('../config/database');

const Salary = {
    getAll: async () => {
        const [rows] = await database.query('SELECT * FROM Salary');
        return rows;
    },

    create: async (data) => {
        const { employeeNumber, month, GrossSalary, TotalDeduction } = data;
        await database.query(
            'INSERT INTO Salary (employeeNumber, month, GrossSalary, TotalDeduction) VALUES (?, ?, ?, ?)',
            [employeeNumber, month, GrossSalary, TotalDeduction]
        );
    },
};

module.exports = Salary;