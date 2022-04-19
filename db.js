import mongoose from 'mongoose';

mongoose.connect(`mongodb://${config.dbUri}/${config.dbName}`);