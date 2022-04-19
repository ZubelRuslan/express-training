import dotenv from 'dotenv';

dotenv.config({
  path: 'environments/.env.' + process.env.ENV
})

export const config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'localhost:27017',
  dbName: process.env.DB_NAME || 'training'
}