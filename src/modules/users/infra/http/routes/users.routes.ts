import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import UserRepository from "@modules/users/reposiotories/UsersRepository";
import CreateUserService from "@modules/users/services/CreateUserService";
import UpdateUserService from "@modules/users/services/UpdateUserService";
import DeleteUserService from "@modules/users/services/DeleteUserService";

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

	delete user.password;

	return response.json(user);
});

userRoutes.get("/", async (request, reponse) => {
	const usersRepository = getCustomRepository(UserRepository);

	const users = await usersRepository.find();

	return reponse.json(users);
});

userRoutes.put("/:id", async (request, response) => {
	const { id } = request.params;
	const { email, password, user_name, avatar_url, shop } = request.body;

	const updateUser = new UpdateUserService();

	const user = await updateUser.execute({
		id,
		email,
		password,
		user_name,
		avatar_url,
		shop,
	});

	delete user?.password;

	return response.json(user);
});

userRoutes.delete("/:id", async (request, response) => {
	const { id } = request.params;

	const deleteUser = new DeleteUserService();

	await deleteUser.execute(id);

	return response.json({ message: "User successful deleted" });
});

export default userRoutes;
