import { usersService } from './users.service';
import { Body, Delete, Get, Path, Post, Put, Route } from 'tsoa';
import { CreateUserDto, UpdateUserDto, UserDto } from './dto/user.dto';

@Route('users')
export class UsersController {

  @Get('/')
  async getAll(): Promise<UserDto[]> {
    return usersService.getAll()
  }

  @Get('{id}')
  async getById(
    @Path() id: string
  ): Promise<UserDto> {
    return usersService.getById(id)
  }

  @Post('/')
  async createUser(@Body() user: CreateUserDto): Promise<UserDto> {
    return usersService.create(user)
  }

  @Put('{id}')
  async updateUserById(
    @Path() id: string,
    @Body() fieldsToUpdate: UpdateUserDto
  ): Promise<UserDto> {
    return usersService.updateById(id, fieldsToUpdate)
  }

  @Delete('{id}')
  async deleteUserById(@Path() id: string): Promise<string> {
    return usersService.deleteById(id)
  }
}