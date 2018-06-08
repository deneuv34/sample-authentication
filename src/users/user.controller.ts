import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.dto';

@Controller('auth')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('user')
	create(@Body() user: User) {
		return this.userService.create(user);
	}

	@Get('user')
	@UseGuards(AuthGuard('bearer'))
	findAll() {
		console.log('wew');
		return 'retristicted';
	}
}
