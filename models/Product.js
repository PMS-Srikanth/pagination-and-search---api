const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a product name']
    },
    description: {
        type: String,
        required: [true, 'Please provide product description']
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price']
    },
    category: {
        type: String,
        required: [true, 'Please provide product category'],
        enum: ['Electronics', 'Cameras', 'Laptops', 'Accessories', 'Headphones', 'Food', 'Books', 'Clothes/Shoes', 'Beauty/Health', 'Sports', 'Outdoor', 'Home']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
