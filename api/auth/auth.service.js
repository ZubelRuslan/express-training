import {UserModel} from '../users/models/user.model.js';
import jwt from 'jsonwebtoken';
import {config} from '../../config.js';

class AuthService {
  async authenticate(email, password) {
    const user = await UserModel.findOne({ email })
    if (user.authenticate(password)) {
      return {
        user: {
          _id: user._id,
          name: user.name,
          surname: user.surname,
          email: user.email
        },
        token: await jwt.sign({ userId: user._id }, config.jwtSecret)
      }
    } else {
      throw new Error('Invalid credentials')
    }
  }
}

export const authService = new AuthService()