require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Route imports
const productRoutes = require('./routes/productRoutes');

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('Pagination and Search API is running!');
});

// Mount Routes
app.use('/api/products', productRoutes);

// Database Connection and Server Start
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB Successfully!');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
