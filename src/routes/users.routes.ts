import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import CreateUserService from "../services/UserServices/CreateUser";
import UserRepository from "../repositories/UsersRepository";

const userRoutes = Router();

userRoutes.post("/", async (request, response) => {
  const { email, password, user_name, avatar_url, shop } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    email,
    password,
    user_name,
    avatar_url,
    shop,
  });

  return response.json(user);
});

userRoutes.get("/", async (request, reponse) => {
  const usersRepository = getCustomRepository(UserRepository);

  const users = await usersRepository.find();

  return reponse.json(users);
});

export default userRoutes;
