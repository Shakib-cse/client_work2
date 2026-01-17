# Furniture Store Backend API

Node.js/Express backend for the furniture e-commerce store with Web3 wallet integration.

## Features

- Product management (CRUD operations)
- Category management
- Order processing
- Wallet-based authentication (MetaMask/Ethereum)
- MongoDB database
- Input validation
- JWT authentication
- Admin role management

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Express Validator

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/furniture-store
JWT_SECRET=your-secret-key-change-this
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

4. Make sure MongoDB is running locally or update `MONGODB_URI` with your MongoDB connection string

5. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Products
- `GET /api/products` - Get all products (with filters: category, featured, bestseller, search)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/wallet/:address` - Get orders by wallet address
- `GET /api/orders/:id` - Get single order
- `PATCH /api/orders/:id/status` - Update order status (admin only)
- `GET /api/orders` - Get all orders (admin only)

### Authentication
- `POST /api/auth/wallet` - Register/login with wallet address
- `GET /api/auth/me` - Get current user (requires auth)
- `PUT /api/auth/profile` - Update user profile (requires auth)

### Health Check
- `GET /api/health` - Server health check

## Authentication

The API uses wallet-based authentication. To authenticate:

1. Send wallet address to `/api/auth/wallet`
2. Receive JWT token
3. Include token in subsequent requests: `Authorization: Bearer <token>`

## Admin Access

To make a user an admin, update the user document in MongoDB:
```javascript
db.users.updateOne(
  { walletAddress: "0x..." },
  { $set: { role: "admin" } }
)
```

## Error Handling

All endpoints return consistent error responses:
```json
{
  "error": "Error message"
}
```

## Development

The server runs on port 5000 by default. CORS is configured to accept requests from the frontend (port 5173).
