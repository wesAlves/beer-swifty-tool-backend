import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

import User from "../infra/typeorm/entities/User";
import UserRepository from "../reposiotories/UsersRepository";

interface IRequest {
    email: string;
    password: string;
    name: string;
    avatar_url: string;
    shop: boolean;
}

class CreateUserService {
    public async execute({
        email,
        password,
        name,
        avatar_url,
        shop,
    }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const checkUserExists = await userRepository.findOne({
            where: { email },
        });

        if (checkUserExists) {
            throw new Error("Usuário já cadastrado");
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            email,
            password: hashedPassword,
            name,
            avatar_url,
            shop,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
