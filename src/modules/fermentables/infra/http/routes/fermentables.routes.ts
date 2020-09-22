import { Router } from "express";
import { container } from "tsyringe";

import FermentablesRepository from "@modules/fermentables/infra/typeorm/repositories/FermentablesRepository";
import CreateFermentableService from "@modules/fermentables/services/CreateFermentableService";
import UpdateFermentableService from "@modules/fermentables/services/UpdateFermentableService";
import DeleteFermentableService from "@modules/fermentables/services/DeleteFermentableService";

const fermentablesRouter = Router();

fermentablesRouter.post("/", async (request, response) => {
	const {
		fermentable_name,
		fermentable_color,
		fermentable_potential,
	} = request.body;

	const createFermentable = container.resolve(CreateFermentableService);

	const fermentable = await createFermentable.execute({
		fermentable_name,
		fermentable_color,
		fermentable_potential,
	});

	return response.json(fermentable);
});

fermentablesRouter.get("/", async (request, response) => {
	const fermentablesRepository = new FermentablesRepository();

	const fermentables = await fermentablesRepository.findAll();

	response.json(fermentables);
});

fermentablesRouter.put("/:id", async (request, response) => {
	const { id } = request.params;
	const {
		fermentable_name,
		fermentable_color,
		fermentable_potential,
	} = request.body;

	const updateFermentable = container.resolve(UpdateFermentableService);

	const fermentable = await updateFermentable.execute({
		id,
		fermentable_name,
		fermentable_color,
		fermentable_potential,
	});

	return response.json(fermentable);
});

fermentablesRouter.delete("/:id", async (request, response) => {
	const { id } = request.params;

	const deleteFermentable = container.resolve(DeleteFermentableService);

	await deleteFermentable.execute(id);

	return response.status(204).send();
});

export default fermentablesRouter;
