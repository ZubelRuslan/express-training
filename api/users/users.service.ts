import { UserModel } from './models/user.model';

class UsersService {
  async getAll() {
    return UserModel.find().select('-password_hash')
  }

  async getById(id: string) {
    return UserModel.findById(id).select('-password_hash')
  }

  async create(user: typeof UserModel) {
    const dbUser = new UserModel(user)
    return dbUser.save()
  }

  async deleteById(id: string) {
    return UserModel.findByIdAndDelete(id)
  }

  async updateById(id: string, fieldsToUpdate: Partial<typeof UserModel>) {
    return UserModel.findByIdAndUpdate(id, fieldsToUpdate).select('-password_hash')
  }

}

export const usersService = new UsersService()