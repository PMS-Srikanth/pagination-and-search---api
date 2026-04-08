const Product = require('../models/Product');

// @desc    Get all products (with Search, Filter, and Pagination)
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        // ----------------------------------------------------
        // 1. SEARCH LOGIC
        // ----------------------------------------------------
        // If a user searches for "?keyword=phone", we want to match anywhere in the name, case-insensitive
        const keyword = req.query.keyword
            ? {
                  name: {
                      $regex: req.query.keyword,
                      $options: 'i', // 'i' means case-insensitive (matches "PHONE", "phone", "Phone")
                  },
              }
            : {};

        // ----------------------------------------------------
        // 2. FILTERING LOGIC
        // ----------------------------------------------------
        // We spread the keyword (if it exists) into our main query object
        const filterQuery = { ...keyword };
        
        // If the user wants a specific category e.g., "?category=Electronics"
        if (req.query.category) {
            filterQuery.category = req.query.category;
        }

        // ----------------------------------------------------
        // 3. PAGINATION LOGIC
        // ----------------------------------------------------
        // Convert the 'page' and 'limit' query parameters to numbers. 
        // Default to page 1 and limit 5 if not provided.
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 5;
        
        // Calculate the 'skip' value
        // The formula is: (page - 1) * limit
        // Example: If page 2, limit 5: skip = (2 - 1) * 5 = 5 (Skip the first 5 records in the database)
        const skip = (page - 1) * limit;

        // ----------------------------------------------------
        // 4. EXECUTING THE QUERY
        // ----------------------------------------------------
        // Find documents matching our filterQuery, apply limit and skip logic
        const products = await Product.find(filterQuery)
            .limit(limit)
            .skip(skip);

        // ----------------------------------------------------
        // 5. GETTING META-DATA
        // ----------------------------------------------------
        // Count total documents matching the query so the frontend knows how many total pages exist
        const totalDocuments = await Product.countDocuments(filterQuery);
        const totalPages = Math.ceil(totalDocuments / limit);

        // Send the JSON response with data and pagination meta-data
        res.status(200).json({
            success: true,
            count: products.length,
            pagination: {
                currentPage: page,
                limit: limit,
                totalPages: totalPages,
                totalItems: totalDocuments
            },
            data: products
        });

    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = {
    getProducts
};
