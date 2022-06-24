import { Request, Response, NextFunction } from 'express';

const disableAuthMiddleware = () => {
  jest.mock('./src/middlewares/auth.middleware.ts', () => ({
    __esModule: true,
    auth: (req: Request, res: Response, next: NextFunction) => next()
  }))
}

module.exports = async () => {
  disableAuthMiddleware();
}