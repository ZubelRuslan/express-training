import { NextFunction, Request, Response } from 'express';
import { config } from '../config';
import { usersService } from '../api/users/users.service';
import { JwtPayload, verify } from 'jsonwebtoken';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
      res.status(401).send()
      return
    }
    const payload = await verify(token, config.jwtSecret) as JwtPayload
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
}