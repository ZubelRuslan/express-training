import {UserModel} from './models/user.model.js';

class UsersService {
  async getAll() {
    return UserModel.find()
  }

  async getById(id) {
    return UserModel.findById(id)
  }

  async create(user) {
    const dbUser = new UserModel(user)
    return dbUser.save()
  }

  async deleteById(id) {
    return UserModel.findByIdAndDelete(id)
  }

  async updateById(id, fieldsToUpdate) {
    return UserModel.findByIdAndUpdate(id, fieldsToUpdate)
  }

}

export const usersService = new UsersService()