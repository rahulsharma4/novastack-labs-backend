import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import itemRoutes from './routes/item.routes.js';
import adminRoutes from './routes/admin.routes.js';
import { seedBlogs } from './config/seed.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api', adminRoutes);

// Health Check API
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    message: 'Express server is running and database is connected successfully',
    timestamp: new Date()
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'An internal server error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

const PORT = process.env.PORT || 5000;

// Connect to Database first, then start server
connectDB().then(() => {
  // Run database seed logic
  seedBlogs();
  
  app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to database', err);
});
