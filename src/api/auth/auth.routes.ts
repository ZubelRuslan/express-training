import { Router } from 'express';
import { Request, Response} from 'express';
import { authController } from './auth.controller';

export const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response) => {
  return res.send(await authController.authenticate(req.body))
})