import { Router } from 'express';
import { validateBody } from '../../middlewares/validation.middleware';
import { CreateUserSchema } from './validationSchemas/createUser.schema';
import { auth } from '../../middlewares/auth.middleware';
import { UsersController } from './users.controller';
import { Request, Response } from 'express';
import { upload } from '../../middlewares/uploadAvatars.middleware';

export const usersRouter = Router();
const usersController = new UsersController();

usersRouter
  .get('/:id', auth, async (req: Request, res: Response) => {
    return res.send(await usersController.getById(req.params.id))
  })
  .get('/', auth, async (req: Request, res: Response) => {
    return res.send(await usersController.getAll())
  })
  .post('/', validateBody(CreateUserSchema), async (req: Request, res: Response) => {
    return res.send(await usersController.createUser(req.body))
  })
  .put('/:id', auth, async (req: Request, res: Response) => {
    return res.send(await usersController.updateUserById(req.params.id, req.body))
  })
  .put('/:id/uploadAvatar', auth, upload.single('avatar'), async (req: Request, res: Response) => {
    res.send(await usersController.uploadAvatar(req.params.id, req.file))
  })
  .delete('/:id', auth, async (req: Request, res: Response) => {
    return res.send(await usersController.deleteUserById(req.params.id))
  })