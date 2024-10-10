import express from 'express';
import { connect, model } from 'mongoose';
import pkg from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { urlencoded, json } = pkg;

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connect('mongodb://mongo:27017/database');

// Create a Mongoose model
const Email = model('Email', {
    email: String,
});

// Middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html')); // Use 'join' to ensure cross-platform compatibility
});

app.post('/add-email', async (req, res) => {
    const { email } = req.body;
    try {
        const newEmail = new Email({ email });
        await newEmail.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error adding email');
    }
});

app.get('/emails', async (req, res) => {
    try {
        const emails = await Email.find({});
        res.json(emails);
    } catch (error) {
        res.status(500).send('Error fetching emails');
    }
});

app.get('/exit', (req, res) => {
    // Perform actions to stop the server or any other desired actions
    res.send('Server stopped');
    process.exit(0); // This stops the server (not recommended in production)
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
