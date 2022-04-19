import {UserModel} from './models/user.model.js';

class UsersService {
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Ruslan',
        surname: 'Zubel'
      }
    ];
  }

  async getAll() {
    return UserModel.find()
  }

  getById(id) {
    return this.users.find(user => user.id.toString() === id.toString())
  }

  create(user) {
    const dbUser = {
      ...user,
      id: new Date().getTime()
    }
    this.users.push(dbUser)
    return dbUser;

  }
}

export const usersService = new UsersService()