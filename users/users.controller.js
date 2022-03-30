const usersService = require('./users.json.service')

class UsersController {

  getAll(req, res) {
    res.send(usersService.getAll())
  }
  getById(req, res) {
    res.send(usersService.getById(req.params.id))
  }
}

const usersController = new UsersController()

module.exports = usersController