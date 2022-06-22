import {usersService} from './users.service';
import { Request, Response } from 'express'

class UsersController {

  async getAll(req: Request, res: Response) {
    res.send(await usersService.getAll())
  }
  async getById(req: Request, res: Response) {
    res.send(await usersService.getById(req.params.id))
  }

  async createUser(req: Request, res: Response) {
    res.send(await usersService.create(req.body))
  }

  async updateUserById(req: Request, res: Response) {
    res.send(await usersService.updateById(req.params.id, req.body))
  }

  async deleteUserById(req: Request, res: Response) {
    res.send(await usersService.deleteById(req.params.id))
  }
}

export const usersController = new UsersController()