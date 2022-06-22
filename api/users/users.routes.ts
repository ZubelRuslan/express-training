import {Router} from 'express';
import {usersController} from './users.controller';
import {validateBody} from '../../middlewares/validation.middleware';
import {CreateUserSchema} from './validationSchemas/createUser.schema';
import {auth} from '../../middlewares/auth.middleware';

export const usersRouter = Router();

usersRouter
  .get('/:id', auth, usersController.getById)
  .get('/', auth, usersController.getAll)
  .post('/', validateBody(CreateUserSchema), usersController.createUser)
  .put('/:id', auth, usersController.updateUserById)
  .delete('/:id', auth, usersController.deleteUserById)