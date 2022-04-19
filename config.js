import dotenv from 'dotenv';

dotenv.config({
  path: 'environments/.env.' + process.env.ENV
})

export const config = {
  port: process.env.PORT || 3000
}