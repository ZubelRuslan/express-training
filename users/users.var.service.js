class UsersService {
  constructor() {
    this.users =  [
      {
        id: 1,
        name: 'Ruslan',
        surname: 'Zubel'
      }
    ];
  }
  getAll() {
    return this.users
  }

  getById(id) {
    return this.users.find(user => user.id.toString() === id.toString())
  }

  createUser(user) {
    const storedUser = {
      ...user,
      id: new Date().getTime()
    }
    this.users.push(storedUser)
    return storedUser
  }
}

const usersService = new UsersService()

module.exports = usersService