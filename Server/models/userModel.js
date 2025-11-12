const connection = require('../config/database');

const createUser = async (userData) =>{
    try {
        const db = await connection();
        const {username, email, password} = userData;

        const [rows] = await db.execute(
            'INSERT INTO users (userName, userEmail, userPassword) VALUES (?, ?, ?)',
            [username, email, password]
        );
        return rows;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

const getUserByEmail = async (email) => {
    try {
        const db = await connection();
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE userEmail = ?',
            [email]
        );
        return rows[0];
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
}

const deleteUser = async (userId) => {
    try {
        const db = await connection();
        const [rows] = await db.execute(
            'DELETE FROM users WHERE userId = ?',
            [userId]
        );
        return rows;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

module.exports = {
    createUser,
    getUserByEmail,
    deleteUser
};