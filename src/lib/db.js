import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://zohaibyaqub11:zohaib123@cluster0.capskqi.mongodb.net/nextjsdb?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    // Check if already connected
    if (mongoose.connections[0].readyState) {
      console.log('Already connected to MongoDB');
      return;
    }

    // Connect to MongoDB with connection options
    await mongoose.connect(MONGODB_URI, {
      connectTimeoutMS: 30000, // Increase timeout to 30 seconds
      socketTimeoutMS: 30000,  // Increase socket timeout to 30 seconds
      maxPoolSize: 10,         // Maintain up to 10 socket connections
    });
    
    console.log('MongoDB connected successfully');

    // Add connection error handler
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    // Add disconnection handler
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Log more details about the error
    console.error('Error details:', error.message);
    throw error;
  }
};

export default connectDB; 