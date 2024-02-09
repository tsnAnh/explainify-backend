import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInRequestDto } from './authentication.interface';

@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('signIn')
  public async signIn(@Body() signInRequestDto: SignInRequestDto) {
    this.authService.signIn();
  }
}
