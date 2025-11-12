require('dotenv').config();
const mysql = require('mysql2/promise');

// Create connection pool once
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'epms',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test connection on startup
pool.getConnection()
    .then(connection => {
        console.log('✅ Database connected successfully');
        connection.release();
    })
    .catch(error => {
        console.error('❌ Database connection failed:', error.message);
    });

// Expose a simple API that always provides execute and query
const db = {
    query: (...args) => pool.query(...args),
    execute: (...args) => {
        // prefer pool.execute if available, fallback to query
        if (typeof pool.execute === 'function') return pool.execute(...args);
        return pool.query(...args);
    },
    getConnection: (...args) => pool.getConnection(...args),
    pool // expose raw pool if needed
};

module.exports = db;