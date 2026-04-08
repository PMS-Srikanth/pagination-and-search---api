const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

// Map the GET request to our controller method
router.route('/').get(getProducts);

module.exports = router;
