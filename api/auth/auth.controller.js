import {authService} from './auth.service.js';

class AuthController {
  async authenticate(req, res) {
    res.send(await authService.authenticate(req.body.email, req.body.password))
  }
}

export const authController = new AuthController()