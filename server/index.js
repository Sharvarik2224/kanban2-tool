// server/index.js

// 1. Import Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// 2. Create Express App
const app = express();
const PORT = process.env.PORT || 5001; // Use port from .env or default to 5001

// 3. Set up Middleware
// Enable CORS for all routes, so our React frontend can talk to our backend
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// 4. Define a simple test route
app.get('/', (req, res) => {
  res.send('Hello from the Kanban Tool API server!');
});

// 5. Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});