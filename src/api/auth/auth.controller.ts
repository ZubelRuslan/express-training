import {authService} from './auth.service';
import { Body, Post, Route } from 'tsoa';
import { AuthenticatedUserDataDto, CredentialsDto } from './dto/auth.dto';

@Route('auth')
class AuthController {
  @Post('/login')
  async authenticate(@Body() creds: CredentialsDto): Promise<AuthenticatedUserDataDto> {
    return  authService.authenticate(creds.email, creds.password)
  }
}

export const authController = new AuthController()