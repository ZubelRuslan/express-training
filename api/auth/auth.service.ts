import {UserModel} from '../users/models/user.model';
import {config} from '../../config';
import { sign } from 'jsonwebtoken';

class AuthService {
  async authenticate(email: string, password: string) {
    const user = await UserModel.findOne({ email })
    if (user.authenticate(password)) {
      return {
        user: {
          _id: user._id,
          name: user.name,
          surname: user.surname,
          email: user.email
        },
        token: sign({ userId: user._id }, config.jwtSecret)
      }
    } else {
      throw new Error('Invalid credentials')
    }
  }
}

export const authService = new AuthService()