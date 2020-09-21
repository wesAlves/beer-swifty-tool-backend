import { getCustomRepository } from "typeorm";

import User from "../infra/typeorm/entities/User";
import UserRepository from "../reposiotories/UsersRepository";

interface Request {
  email: string;
  password: string;
  user_name: string;
  avatar_url: string;
  shop: boolean;
}

class CreateUserService {
  public async execute({
    email,
    password,
    user_name,
    avatar_url,
    shop,
  }: Request): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const user = userRepository.create({
      email,
      password,
      user_name,
      avatar_url,
      shop,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
