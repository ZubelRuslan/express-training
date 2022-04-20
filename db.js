import mongoose from 'mongoose';
import {config} from './config.js';

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4,
  auth: {
    username: config.dbUser,
    password: config.dbPass
  },

};

export const initDb = () => {
  mongoose.connect(`mongodb://${config.dbUri}/${config.dbName}`, options);
}