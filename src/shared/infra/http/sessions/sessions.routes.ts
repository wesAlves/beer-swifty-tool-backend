import { Router } from "express";

const sessionsRounter = Router();

sessionsRounter.post("/", async (request, response) => {
	try {
		const { email, password } = request.body;

		return response.json({ message: "yess" });
	} catch (err) {
		return response.status(400).json({ error: "this is not right" });
	}
});

export default sessionsRounter;
