import mongoose from 'mongoose';

export const UserModel = mongoose.model('User', {
  name: String,
  surname: String,
  email: String,
  password: String
});