import { Injectable } from '@nestjs/common';
import { User } from './user.dto';

@Injectable()
export class UserService {
	private readonly users: User[] = [];

	create(user: User) {
		this.users.push(user);
	}

	async findOneById(token: string) {
		console.log(token);
		if (token == null || token == '') {
			return await null;
		}
		return await this.users[0];
	}

	findAll() {
		return this.users;
	}
}
