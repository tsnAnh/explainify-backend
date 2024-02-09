import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { AUTHENTICATION_SERVICE } from './authentication.interface';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [
    {
      useClass: AuthenticationService,
      provide: AUTHENTICATION_SERVICE,
    },
  ],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
