require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const sampleProducts = [
    {
        name: "SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card",
        price: 19.99,
        description: "Up to 120MB/s read speed, 10-year warranty, A1 app performance and Class 10 for Full HD video.",
        category: "Electronics",
        stock: 50
    },
    {
        name: "Apple iPhone 14 Pro Max",
        price: 1099.99,
        description: "6.7-inch Super Retina XDR display featuring Always-On and ProMotion, Dynamic Island, 48MP Main camera.",
        category: "Electronics",
        stock: 10
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: 1199.99,
        description: "200MP camera, built-in S Pen, 6.8-inch display, Night Mode, Long Battery Life.",
        category: "Electronics",
        stock: 15
    },
    {
        name: "Sony WH-1000XM5 Wireless Headphones",
        price: 398.00,
        description: "Industry leading noise canceling, 30-hour battery life, quick charge feature.",
        category: "Headphones",
        stock: 25
    },
    {
        name: "Dell XPS 15 Laptop",
        price: 1899.00,
        description: "15.6-inch OLED display, Intel Core i7, 16GB RAM, 512GB SSD, Windows 11.",
        category: "Laptops",
        stock: 5
    },
    {
        name: "MacBook Pro 16-inch",
        price: 2499.00,
        description: "M2 Pro chip, 16GB RAM, 512GB SSD, Liquid Retina XDR display.",
        category: "Laptops",
        stock: 8
    },
    {
        name: "GoPro HERO11 Black",
        price: 399.99,
        description: "Waterproof Action Camera with 5.3K60 Ultra HD Video, GP2 Processor, Live Streaming.",
        category: "Cameras",
        stock: 20
    },
    {
        name: "Amazon Echo Dot (5th Gen)",
        price: 49.99,
        description: "Smart speaker with Alexa, improved sound and Wi-Fi.",
        category: "Electronics",
        stock: 100
    },
    {
        name: "Logitech MX Master 3S Wireless Mouse",
        price: 99.99,
        description: "Quiet clicks, 8000 DPI track-on-glass sensor, USB-C rechargeable.",
        category: "Accessories",
        stock: 30
    },
    {
        name: "Keychron K2 Wireless Mechanical Keyboard",
        price: 79.99,
        description: "75% layout, Gateron brown switches, RGB Backlight, aluminum frame.",
        category: "Accessories",
        stock: 15
    },
    {
        name: "Nintendo Switch OLED",
        price: 349.99,
        description: "7-inch OLED screen, 64GB internal storage, enhanced audio, wide adjustable stand.",
        category: "Electronics",
        stock: 12
    },
    {
        name: "Bose QuietComfort Earbuds II",
        price: 299.00,
        description: "Personalized noise cancellation and sound, IPX4 water resistance.",
        category: "Headphones",
        stock: 18
    },
    {
        name: "Samsung 49-inch Odyssey G9 Gaming Monitor",
        price: 1299.99,
        description: "Curved display, 240Hz refresh rate, 1ms response time, QLED.",
        category: "Electronics",
        stock: 4
    },
    {
        name: "Dyson V15 Detect Cordless Vacuum",
        price: 749.99,
        description: "Laser reveals microscopic dust, intelligent suction, 60 minutes runtime.",
        category: "Home",
        stock: 6
    },
    {
        name: "Nespresso VertuoPlus Coffee Maker",
        price: 159.00,
        description: "Brews 4 different cup sizes at the touch of a button, programmable volume.",
        category: "Home",
        stock: 22
    }
];

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        
        // Clear previous data
        await Product.deleteMany();
        console.log('Previous products deleted');

        // Insert new data
        await Product.insertMany(sampleProducts);
        console.log('Sample products inserted successfully');

        process.exit();
    })
    .catch((error) => {
        console.error('Error with seeder:', error.message);
        process.exit(1);
    });
