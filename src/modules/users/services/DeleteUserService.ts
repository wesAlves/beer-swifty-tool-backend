import { getCustomRepository } from "typeorm";

import UserRepository from "../reposiotories/UsersRepository";

class DeleteUserService {
	public async execute(id: string): Promise<void> {
		const userRepository = getCustomRepository(UserRepository);

		await userRepository.delete({ id: `${id}` });
	}
}

export default DeleteUserService;
