import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { UserController } from './../users/user.controller';
import { UserService } from './../users/user.service';

@Module({
	controllers: [UserController],
	providers: [AuthService, HttpStrategy, UserService]
})
export class AuthModule {}
