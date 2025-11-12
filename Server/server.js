require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const connection = require('./config/database');


async function startServer() {
    try {
        await connection();
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

startServer();