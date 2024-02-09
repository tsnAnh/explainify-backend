import { Injectable } from '@nestjs/common';
import { IAuthenticationService } from './authentication.interface';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  signIn(email: string, password: string): Promise<string> {
    
  }
}
