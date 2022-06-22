import { config as dotenv } from 'dotenv';

dotenv({
  path: 'src/environments/.env.' + process.env.ENV
})

export const config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'localhost:27017',
  dbName: process.env.DB_NAME || 'training',
  dbUser: process.env.DB_USER || 'root',
  dbPass: process.env.DB_PASSWORD || 'example',
  jwtSecret: process.env.JWT_SECRET || 'secret',
}