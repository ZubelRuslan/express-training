import { UserDto } from '../../users/dto/user.dto';

export interface CredentialsDto {
  /**
   * @example "ruslan.zubel@itechart-group.com"
   */
  email: string,
  password: string
}

export interface AuthenticatedUserDataDto {
  user: UserDto,
  token: string
}