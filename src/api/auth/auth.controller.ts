import {authService} from './auth.service';
import { Body, Post, Route, Tags } from 'tsoa';
import { AuthenticatedUserDataDto, CredentialsDto } from './dto/auth.dto';

@Tags('Auth')
@Route('auth')
class AuthController {
  @Post('/login')
  async authenticate(@Body() creds: CredentialsDto): Promise<AuthenticatedUserDataDto> {
    return  authService.authenticate(creds.email, creds.password)
  }
}

export const authController = new AuthController()