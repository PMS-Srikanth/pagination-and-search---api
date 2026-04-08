# Pagination and Search API

A RESTful backend API built with Node.js, Express, and MongoDB. It implements common and highly scalable e-commerce features including Searching (via regex), Filtering, and Pagination.

## Features
- **Pagination:** Handles `limit` and `page` parameters to skip records efficiently.
- **Search Logic:** Implements MongoDB `$regex` for case-insensitive keyword searches.
- **Filtering:** Filter records exact matches like categories. 
- **Database Seeding:** Included script to automatically populate dummy products into a fresh database.

## Tech Stack
- Node.js & Express.js
- MongoDB & Mongoose

## Installation

1. Clone the repository:
```bash
git clone https://github.com/PMS-Srikanth/pagination-and-search---api.git
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shopDB
```
4. Seed the database with dummy data:
```bash
node seeder.js
```
5. Run the server:
```bash
npm run dev
```

## API Endpoints

### Get All Products
`GET /api/products`

**Query Parameters:**
- `keyword`: Search by product name (e.g., `?keyword=phone`)
- `category`: Filter by exact category (e.g., `?category=Electronics`)
- `page`: Page number (e.g., `?page=2`) 
- `limit`: Number of items per page (e.g., `?limit=5`)

**Example Request:**
```
GET /api/products?keyword=apple&page=1&limit=5
```
