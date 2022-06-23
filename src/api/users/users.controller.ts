import { usersService } from './users.service';
import { Body, Delete, Get, Path, Post, Put, Route, Security, Tags, UploadedFile } from 'tsoa';
import { CreateUserDto, UpdateUserDto, UserDto } from './dto/user.dto';

@Tags('User')
@Route('users')
export class UsersController {

  @Security('jwt')
  @Get('/')
  async getAll(): Promise<UserDto[]> {
    return usersService.getAll()
  }

  @Security('jwt')
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

  @Security('jwt')
  @Put('{id}')
  async updateUserById(
    @Path() id: string,
    @Body() fieldsToUpdate: UpdateUserDto
  ): Promise<UserDto> {
    return usersService.updateById(id, fieldsToUpdate)
  }

  @Security('jwt')
  @Delete('{id}')
  async deleteUserById(@Path() id: string): Promise<string> {
    return usersService.deleteById(id)
  }

  @Security('jwt')
  @Put('{id}/uploadAvatar')
  async uploadAvatar(@Path() id: string, @UploadedFile('avatar') file: Express.Multer.File): Promise<UserDto> {
    return usersService.updateById(id, { avatar: file.path })
  }
}