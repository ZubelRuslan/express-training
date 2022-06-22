import {usersService} from './users.service';
import { Request, Response } from 'express'
import { Get, Path, Route } from 'tsoa';
import { UserDto } from './dto/user.dto';

@Route('users')
export class UsersController {

  @Get('/')
  async getAll():  Promise<UserDto[]>{
    return usersService.getAll()
  }
  @Get("{id}")
  async getById(
    @Path() id: string
  ): Promise<UserDto> {
    return usersService.getById(id)
  }

  async createUser(req: Request, res: Response) {
    res.send(await usersService.create(req.body))
  }

  async updateUserById(req: Request, res: Response) {
    res.send(await usersService.updateById(req.params.id, req.body))
  }

  async deleteUserById(req: Request, res: Response) {
    res.send(await usersService.deleteById(req.params.id))
  }
}