import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

import User from "../infra/typeorm/entities/User";
import UserRepository from "../reposiotories/UsersRepository";

interface IRequest {
    id: string;
    email: string;
    password: string;
    name: string;
    avatar_url: string;
    shop: boolean;
}

class UpdateUserService {
    public async execute({
        id,
        email,
        password,
        name,
        avatar_url,
        shop,
    }: IRequest): Promise<User | undefined> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.update(id, {
            email,
            password,
            name,
            avatar_url,
            shop,
        });

        // const updatedUser = await userRepository.find({ id: `${id}` });
        const updatedUser = await userRepository.findOne({ id });

        return updatedUser;
    }
}

export default UpdateUserService;
