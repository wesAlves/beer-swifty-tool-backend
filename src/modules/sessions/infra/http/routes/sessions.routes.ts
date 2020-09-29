import { Router } from "express";

import AuthenticateUserService from "@modules/sessions/services/AuthenticateUserService";

const sessionsRounter = Router();

sessionsRounter.post("/", async (request, response) => {
	try {
		const { email, password } = request.body;

		const athenticateUser = new AuthenticateUserService();

		const { user, token } = await athenticateUser.execute({
			email,
			password,
		});

		delete user.password;

		return response.json({ user, token });
	} catch (err) {
		return response.status(400).json({ error: "this is not right" });
	}
});

export default sessionsRounter;
