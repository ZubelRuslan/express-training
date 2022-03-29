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
}

const usersService = new UsersService()

module.exports = usersService