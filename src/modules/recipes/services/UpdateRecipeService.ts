import { getCustomRepository } from "typeorm";

import Recipe from "../infra/typeorm/entities/Recipe";
import RecipeRepository from "../repositories/RecipeRepository";

interface IRequest {
    id: string;
    recipe_name: string;
    hops: [];
    fermentables: [];
    yeasts: [];
    srm: number;
    og: number;
    fg: number;
    description: string;
    style_id: string;
}

class UpdateRecipeService {
    public async execute({
        id,
        recipe_name,
        hops,
        fermentables,
        yeasts,
        srm,
        og,
        fg,
        description,
        style_id,
    }: IRequest): Promise<Recipe> {
        const recipeRepository = getCustomRepository(RecipeRepository);

        const oldRecipe = await recipeRepository.findOne(
            { id },
            {
                relations: [
                    "hops_recipe",
                    "fermentables_recipe",
                    "yeasts_recipe",
                    "style_id",
                ],
            }
        );

        if (oldRecipe) {
            // console.log(oldRecipe);
            await recipeRepository.save({
                id,
                recipe_name,
                hops_recipe: hops,
                fermentables_recipe: fermentables,
                yeasts_recipe: yeasts,
                srm,
                og,
                fg,
                description,
                style_id,
            });
        }

        const updatedRecipe = await recipeRepository.find({ id: `${id}` });

        return updatedRecipe[0];
    }
}

export default UpdateRecipeService;
