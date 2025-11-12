require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const connection = require('./config/database');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/user', userRoutes);

async function startServer() {
    try {
        await connection();
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running on: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

startServer();