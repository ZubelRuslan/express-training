import {Router} from 'express';
import {usersRouter} from './api/users/users.routes.js';
import {authRouter} from './api/auth/auth.routes.js';

/**
 * Root application router. Should be connected to root application path
 * @type {Router}
 */
export const rootRouter = new Router();

/**
 * Specific api router to implement REST API for application
 * @type {Router}
 */
const apiRouter = new Router();

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