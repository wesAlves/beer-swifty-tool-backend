import { getCustomRepository, getRepository } from "typeorm";

import RecipeRepository from "../repositories/RecipeRepository";
import Recipe from "../infra/typeorm/entities/Recipe";

interface IRequest {
    name: string;
    hops: [];
    fermentables: [];
    yeasts: [];
    color: number | undefined;
    og: number | undefined;
    fg: number | undefined;
    abv: number | undefined;
    ibu: number | undefined;
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

class CreateRecipeService {
    public async execute({
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

        const recipe = recipeRepository.create({
            name,
            og,
            fg,
            abv,
            color,
            ibu,
            final_volume,
            global_efficiency,
            description,
            short_description,
            is_private,
            notes,
            img_url,
            style_id,
            user_id,
            hops_recipe: hops,
            fermentables_recipe: fermentables,
            yeasts_recipe: yeasts,
        });

        await recipeRepository.save(recipe);

        return recipe;
    }
}

export default CreateRecipeService;
