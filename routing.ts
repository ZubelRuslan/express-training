import {usersRouter} from './api/users/users.routes';
import {authRouter} from './api/auth/auth.routes';
import { Router } from 'express';

/**
 * Root application router. Should be connected to root application path
 * @type {Router}
 */
export const rootRouter = Router();

/**
 * Specific api router to implement REST API for application
 * @type {Router}
 */
const apiRouter = Router();

/**
 * Adjust new entity routing to api router
 *
 * When new entity will be added it can/should be added in the same way as users entity
 */
apiRouter.use('/users', usersRouter)
apiRouter.use('/auth', authRouter)

/**
 * Handle /api requests by apiRouter
 */
rootRouter.use('/api', apiRouter)