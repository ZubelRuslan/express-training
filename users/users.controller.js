import {usersService} from './users.service.js';

class UsersController {

  getAll(req, res) {
    res.send(usersService.getAll())
  }
  getById(req, res) {
    res.send(usersService.getById(req.params.id))
  }

  createUser(req, res) {
    res.send(usersService.create(req.body))
  }

  updateUserById(req, res) {
    res.send(usersService.updateById(req.params.id, req.body))
  }

  deleteUserById(req, res) {
    res.send(usersService.deleteById(req.params.id))
  }
}

export const usersController = new UsersController()