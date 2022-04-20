import {UserModel} from './models/user.model.js';

class UsersService {
  async getAll() {
    return UserModel.find().select('-password_hash')
  }

  async getById(id) {
    return UserModel.findById(id).select('-password_hash')
  }

  async create(user) {
    const dbUser = new UserModel(user)
    return dbUser.save()
  }

  async deleteById(id) {
    return UserModel.findByIdAndDelete(id)
  }

  async updateById(id, fieldsToUpdate) {
    return UserModel.findByIdAndUpdate(id, fieldsToUpdate).select('-password_hash')
  }

}

export const usersService = new UsersService()