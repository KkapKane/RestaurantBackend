# RestaurantBackend

A Node.js/Express backend API for managing restaurant menus and transactions.

## Features

- Food menu management
- Drink menu management
- Transaction tracking
- MongoDB database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- npm or yarn

## Local Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Create a `.env` file in the root directory:**

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

3. **Run the development server:**
   ```bash
   npm run server
   ```
   Or for production:
   ```bash
   npm start
   ```

## Render Deployment

### Option 1: Using Blueprint (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Render will automatically detect the `render.yaml` file
4. Add your environment variables in the Render dashboard:
   - `MONGO_URI`: Your MongoDB connection string (from MongoDB Atlas or other provider)

### Option 2: Manual Setup

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:**
     - `MONGO_URI`: Your MongoDB connection string
     - `NODE_ENV`: production

## API Endpoints

- `/restaurant/menu/foods` - Food menu routes
- `/restaurant/menu/drinks` - Drink menu routes
- `/restaurant/transactions` - Transaction routes

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string (required)
- `NODE_ENV` - Environment mode (development/production)
