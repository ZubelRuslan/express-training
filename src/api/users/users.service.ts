import { UserModel } from './models/user.model';
import { CreateUserDto, DbUser, UpdateUserDto, UserDto } from './dto/user.dto';

class UsersService {
  async getAll(): Promise<UserDto[]> {
    return UserModel.find().select('-password_hash')
  }

  async getById(id: string): Promise<UserDto> {
    return UserModel.findById(id).select('-password_hash')
  }

  async create(user: CreateUserDto): Promise<DbUser> {
    const dbUser = new UserModel(user)
    return dbUser.save()
  }

  async deleteById(id: string): Promise<string> {
    return UserModel.findByIdAndDelete(id)
  }

  async updateById(
    id: string,
    fieldsToUpdate: UpdateUserDto
  ): Promise<UserDto> {
    return UserModel.findByIdAndUpdate(id, fieldsToUpdate).select('-password_hash')
  }

}

export const usersService = new UsersService()