import jwt from 'jsonwebtoken'
import {config} from '../config.js';
import {usersService} from '../api/users/users.service.js';

export const auth = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
      res.status(401).send()
      return
    }
    const payload = await jwt.verify(token, config.jwtSecret)
    if (!payload) {
      res.status(401).send()
      return
    }
    const user = await usersService.getById(payload.userId);
    if (user) {
      next()
    }
    return
  } catch {
    res.status(403).send()
    return
  }
  res.status(403).send()
}