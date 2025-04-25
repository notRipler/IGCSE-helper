const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not found in .env file");
    }

    console.log('Connecting to MongoDB...');
    
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // 5s timeout for initial connection
      socketTimeoutMS: 30000, // 30s timeout for operations
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1); // Exit with failure code
  }
};

// Optional: Add event listeners for better monitoring
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('Mongoose default connection disconnected');
});

// Close connection on app termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose default connection disconnected through app termination');
  process.exit(0);
});

module.exports = connectDB;