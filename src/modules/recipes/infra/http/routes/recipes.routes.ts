import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

// import ensureAuthenticated from "../../../../../middlewares/ensureAuthenticated";

import RecipeRepository from "@modules/recipes/repositories/RecipeRepository";
import CreateRecipeService from "@modules/recipes/services/CreateRecipeService";
import UpdateRecipeService from "@modules/recipes/services/UpdateRecipeService";
import DeleteRecipeService from "@modules/recipes/services/DeleteRecipeService";

const recipeRoutes = Router();

// recipeRoutes.use(ensureAuthenticated);

recipeRoutes.post("/", async (request, response) => {
    const {
        name,
        hops,
        fermentables,
        yeasts,
        color,
        og,
        fg,
        abv,
        ibu,
        final_volume,
        global_efficiency,
        description,
        short_description,
        notes,
        is_private,
        img_url,
        style_id,
        user_id,
    } = request.body;

    const createRecipe = new CreateRecipeService();

    const recipe = await createRecipe.execute({
        name,
        hops,
        fermentables,
        yeasts,
        color,
        og,
        fg,
        abv,
        ibu,
        final_volume,
        global_efficiency,
        description,
        short_description,
        notes,
        is_private,
        img_url,
        style_id,
        user_id,
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
        name,
        hops,
        fermentables,
        yeasts,
        color,
        og,
        fg,
        abv,
        ibu,
        final_volume,
        global_efficiency,
        description,
        short_description,
        notes,
        is_private,
        img_url,
        style_id,
        user_id,
    } = request.body;

    const updateRecipe = new UpdateRecipeService();

    const recipe = await updateRecipe.execute({
        id,
        name,
        hops,
        fermentables,
        yeasts,
        color,
        og,
        fg,
        abv,
        ibu,
        final_volume,
        global_efficiency,
        description,
        short_description,
        notes,
        is_private,
        img_url,
        style_id,
        user_id,
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
