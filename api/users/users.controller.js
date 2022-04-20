import {usersService} from './users.service.js';

class UsersController {

  async getAll(req, res) {
    res.send(await usersService.getAll())
  }
  async getById(req, res) {
    res.send(await usersService.getById(req.params.id))
  }

  async createUser(req, res) {
    res.send(await usersService.create(req.body))
  }

  async updateUserById(req, res) {
    res.send(await usersService.updateById(req.params.id, req.body))
  }

  async deleteUserById(req, res) {
    res.send(await usersService.deleteById(req.params.id))
  }
}

export const usersController = new UsersController()