import {Router} from 'express';
import {usersController} from './users.controller.js';
import {validateBody} from '../../middlewares/validation.middleware.js';
import {CreateUserSchema} from './validationSchemas/createUser.schema.js';
import {auth} from '../../middlewares/auth.middleware.js';

export const usersRouter = new Router();

usersRouter
  .get('/:id', auth, usersController.getById)
  .get('/', auth, usersController.getAll)
  .post('/', validateBody(CreateUserSchema), usersController.createUser)
  .put('/:id', auth, usersController.updateUserById)
  .delete('/:id', auth, usersController.deleteUserById)