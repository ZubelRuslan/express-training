const fs = require("fs");

class UsersService {
  constructor() {
    this.users = JSON.parse(fs.readFile('/asd.json'));
  }
  getAll() {
    return this.users
  }

  getById(id) {
    return this.users.find(user => user.id.toString() === id.toString())
  }

  create(user) {
    const storedUser = {
      ...user,
      id: new Date().getTime()
    }
    this.users.push(storedUser)
    fs.writeFile('/asd.json', JSON.stringify(this.users))
    return storedUser
  }
}

const usersService = new UsersService()

module.exports = usersService