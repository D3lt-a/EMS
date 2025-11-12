const { createUser, getUserByEmail, deleteUser } = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ 
                message: "Missing required fields",
                required: ['username', 'email', 'password']
            });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userData = { username, email, userPassword: hashedPassword }; // Fixed field name
        const user = await createUser(userData);

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }
        
        const user = await getUserByEmail(email);
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const passwordMatch = await bcrypt.compare(password, user.userPassword);
        
        if (passwordMatch) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

const remove = async (req, res) => {
    try {   
        const { userId } = req.params;
        
        if (!userId) { // Validate parameter
            return res.status(400).json({ message: 'User ID required' });
        }
        
        const result = await deleteUser(userId);
        
        if (!result) { // Check if deletion succeeded
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

module.exports = {
    register,
    login,
    remove
};