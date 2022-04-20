import {Router} from 'express';
import {usersController} from './users.controller.js';
import {validateBody} from '../middlewares/validation.middleware.js';
import {CreateUserSchema} from './validationSchemas/createUser.schema.js';

export const usersRouter = new Router();

usersRouter
  .get('/:id', usersController.getById)
  .get('/', usersController.getAll)
  .post('/', validateBody(CreateUserSchema), usersController.createUser)
  .put('/:id', usersController.updateUserById)
  .delete('/:id', usersController.deleteUserById)