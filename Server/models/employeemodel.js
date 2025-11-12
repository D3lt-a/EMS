import db from '../config/db.js';

export const Employee = {
    // Get all employees
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM employees');
        return rows;
    },

    // Get one employee by ID
    getById: async (empNum) => {
        const [rows] = await db.query('SELECT * FROM employees WHERE empNum = ?', [empNum]);
        return rows[0];
    },

    // Create new employee
    create: async (data) => {
        const { empNum, empFname, empLname, position, address, gender, hiredDate, departmentcode } = data;
        await db.query(
            `INSERT INTO employees 
       (empNum, empFname, empLname, position, address, gender, hiredDate, departmentcode)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [empNum, empFname, empLname, position, address, gender, hiredDate, departmentcode]
        );
    },

    // Update employee
    update: async (empNum, data) => {
        const { empFname, empLname, position, address, gender, hiredDate, departmentcode } = data;
        await db.query(
            `UPDATE employees 
        SET empFname=?, empLname=?, position=?, address=?, gender=?, hiredDate=?, departmentcode=? 
        WHERE empNum=?`,
            [empFname, empLname, position, address, gender, hiredDate, departmentcode, empNum]
        );
    },

    // Delete employee
    delete: async (empNum) => {
        await db.query('DELETE FROM employees WHERE empNum = ?', [empNum]);
    },
};
