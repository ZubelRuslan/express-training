import {Router} from 'express';
import {usersController} from './users.controller.js';

export const usersRouter = new Router();

usersRouter
  .get('/:id', usersController.getById)
  .get('/', usersController.getAll)
  .post('/', usersController.createUser)
  .put('/:id', usersController.updateUserById)
  .delete('/:id', usersController.deleteUserById)