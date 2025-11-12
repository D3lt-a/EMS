const database = require('../config/database');

const Employee = {
    getAll: async () => {
        const [rows] = await database.query('SELECT * FROM employees');
        return rows;
    },

    getById: async (empNum) => {
        const [rows] = await database.query('SELECT * FROM employees WHERE empNum = ?', [empNum]);
        return rows[0];
    },

    create: async (data) => {
        const { empNum, empFname, empLname, position, address, gender, hiredDate, departmentcode } = data;
        await database.query(
            `INSERT INTO employees(empNum, empFname, empLname, position, address, gender, hiredDate, departmentcode)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [empNum, empFname, empLname, position, address, gender, hiredDate, departmentcode]
        );
    },

    update: async (empNum, data) => {
        const { empFname, empLname, position, address, gender, hiredDate, departmentcode } = data;
        await database.query(
            `UPDATE employees 
        SET empFname=?, empLname=?, position=?, address=?, gender=?, hiredDate=?, departmentcode=? 
        WHERE empNum=?`,
            [empFname, empLname, position, address, gender, hiredDate, departmentcode, empNum]
        );
    },

    delete: async (empNum) => {
        await database.query('DELETE FROM employees WHERE empNum = ?', [empNum]);
    },
};

module.exports = Employee;