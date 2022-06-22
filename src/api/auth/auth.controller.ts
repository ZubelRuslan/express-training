import {authService} from './auth.service';
import { Request, Response } from 'express';

class AuthController {
  async authenticate(req: Request, res: Response) {
    res.send(await authService.authenticate(req.body.email, req.body.password))
  }
}

export const authController = new AuthController()