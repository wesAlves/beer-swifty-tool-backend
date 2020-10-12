import { getCustomRepository, getRepository } from "typeorm";

import RecipeRepository from "../repositories/RecipeRepository";
import Recipe from "../infra/typeorm/entities/Recipe";

interface IRequest {
    recipe_name: string;
    owner_id: string;
    hops: [];
    fermentables: [];
    yeasts: [];
    srm: number;
    og: number;
    fg: number;
    description: string;
    style_id: string;
}

class CreateRecipeService {
    public async execute({
        recipe_name,
        owner_id,
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

        const recipe = recipeRepository.create({
            owner_id,
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

        await recipeRepository.save(recipe);

        return recipe;
    }
}

export default CreateRecipeService;
