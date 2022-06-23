import {authService} from './auth.service';
import { Body, Post, Route, Tags } from 'tsoa';
import { AuthenticatedUserDataDto, CredentialsDto } from './dto/auth.dto';

@Tags('Auth')
@Route('auth')
class AuthController {
  /**
   * Route to login into application using email and password. Will return user object with access token
   * @summary jwt login
   */
  @Post('/login')
  async authenticate(@Body() creds: CredentialsDto): Promise<AuthenticatedUserDataDto> {
    return  authService.authenticate(creds.email, creds.password)
  }
}

export const authController = new AuthController()