import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import ensureAuthenticated from "../../../../../middlewares/ensureAuthenticated";

import RecipeRepository from "@modules/recipes/repositories/RecipeRepository";
import CreateRecipeService from "@modules/recipes/services/CreateRecipeService";
import UpdateRecipeService from "@modules/recipes/services/UpdateRecipeService";
import DeleteRecipeService from "@modules/recipes/services/DeleteRecipeService";

const recipeRoutes = Router();

recipeRoutes.use(ensureAuthenticated);

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
	const recipeRepository = getCustomRepository(RecipeRepository);
	const recipe = await recipeRepository.find();

	response.json(recipe);
});

recipeRoutes.get("/:id", async (request, response) => {
	const { id } = request.params;
	const recipeRepository = getCustomRepository(RecipeRepository);
	const recipe = await recipeRepository.find({ id: `${id}` });

	response.json(recipe);
});

recipeRoutes.put("/:id", async (request, response) => {
	const { id } = request.params;
	const {
		recipe_name,
		hops,
		fermentables,
		yeasts,
		srm,
		og,
		fg,
		description,
	} = request.body;

	const updateRecipe = new UpdateRecipeService();

	const recipe = await updateRecipe.execute({
		id,
		recipe_name,
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

recipeRoutes.delete("/:id", async (request, response) => {
	const { id } = request.params;

	const deleteRecipe = new DeleteRecipeService();

	await deleteRecipe.execute(id);

	return response.json({ message: "Successful deleted" });
});

export default recipeRoutes;
