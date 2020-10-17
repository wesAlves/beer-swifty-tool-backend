import { getCustomRepository } from "typeorm";

import Recipe from "../infra/typeorm/entities/Recipe";
import RecipeRepository from "../repositories/RecipeRepository";

interface IRequest {
    id: string;
    name: string;
    hops: [];
    fermentables: [];
    yeasts: [];
    color: number;
    og: number;
    fg: number;
    abv: number;
    ibu: number;
    final_volume: number;
    global_efficiency: number;
    description: string;
    short_description: string;
    notes: string;
    is_private: boolean;
    img_url: string;
    style_id: string;
    user_id: string;
}

class UpdateRecipeService {
    public async execute({
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
    }: IRequest): Promise<Recipe> {
        const recipeRepository = getCustomRepository(RecipeRepository);

        const oldRecipe = await recipeRepository.findOne(
            { id },
            {
                relations: [
                    "hops_recipe",
                    "fermentables_recipe",
                    "yeasts_recipe",
                ],
            }
        );

        if (oldRecipe) {
            console.log(oldRecipe);
            await recipeRepository.save({
                id,
                name,
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
                hops_recipe: hops,
                fermentables_recipe: fermentables,
                yeasts_recipe: yeasts,
            });
        }

        const updatedRecipe = await recipeRepository.find({ id: `${id}` });

        return updatedRecipe[0];
    }
}

export default UpdateRecipeService;
