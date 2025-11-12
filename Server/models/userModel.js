const pool = require('../config/database');

const createUser = async (userData) => {
    try {
        const { username, email, userPassword } = userData;
        const query = 'INSERT INTO users (username, email, userPassword) VALUES (?, ?, ?)';
        
        const [result] = await pool.query(query, [username, email, userPassword]);
        
        return {
            userId: result.insertId,
            username,
            email
        };
    } catch (error) {
        throw new Error(`Create user error: ${error.message}`);
    }
};

const getUserByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [results] = await pool.query(query, [email]);
        
        return results.length > 0 ? results[0] : null;
    } catch (error) {
        throw new Error(`Get user error: ${error.message}`);
    }
};

const deleteUser = async (userId) => {
    try {
        const query = 'DELETE FROM users WHERE userId = ?';
        const [result] = await pool.query(query, [userId]);
        
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error(`Delete user error: ${error.message}`);
    }
};

module.exports = {
    createUser,
    getUserByEmail,
    deleteUser
};