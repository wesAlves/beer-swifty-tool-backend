import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import RecipeRepositoy from "@modules/recipes/repositories/RecipeRepository";
import CreateRecipeService from "@modules/recipes/services/CreateRecipe";

const recipeRoutes = Router();

recipeRoutes.post("/", async (request, response) => {
	const {
		recipe_name,
		owner_id,
		hops,
		fermentables,
		yeasts,
		srm,
		og,
		fg,
		description,
	} = request.body;

	const createRecipe = new CreateRecipeService();

	const recipe = await createRecipe.execute({
		recipe_name,
		owner_id,
		hops,
		fermentables,
		yeasts,
		srm,
		og,
		fg,
		description,
	});

	return response.json(recipe);
});

recipeRoutes.get("/", async (request, response) => {
	const recipeRepositoy = getCustomRepository(RecipeRepositoy);
	const recipe = await recipeRepositoy.find();

	response.json(recipe);
});

recipeRoutes.get("/:id", async (request, response) => {
	const { id } = request.params;
	const recipeRepositoy = getCustomRepository(RecipeRepositoy);
	const recipe = await recipeRepositoy.find({ id: `${id}` });

	response.json(recipe);
});

recipeRoutes.put("/:id", async (request, response) => {
	const { id } = request.params;

	// TODO: create a service to handle this, and create the functionallity

	return null;
});

recipeRoutes.delete("/:id", async (request, response) => {
	const { id } = request.params;

	const recipeRepository = getCustomRepository(RecipeRepositoy);

	await recipeRepository.delete({ id: `${id}` });

	// TODO: create a service to handle this

	return response.json({ message: "Successful deleted" });
});

export default recipeRoutes;
