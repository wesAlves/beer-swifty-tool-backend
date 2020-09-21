import { getCustomRepository, getRepository } from "typeorm";

import Recipe from "../infra/typeorm/entities/Recipe";
import RecipeRepository from "../repositories/RecipeRepository";

interface Request {
  recipe_name: string;
  owner_id: string;
  hops: [];
  fermentables: [];
  yeasts: [];
}

class CreateRecipeService {
  public async execute({
    recipe_name,
    owner_id,
    hops,
    fermentables,
    yeasts,
  }: Request): Promise<Recipe> {
    const recipeRepository = getRepository(Recipe);

    const recipe = recipeRepository.create({
      owner_id,
      recipe_name,
      hops_recipe: hops,
      fermentables_recipe: fermentables,
      yeasts_recipe: yeasts,
    });

    await recipeRepository.save(recipe);

    return recipe;
  }
}

export default CreateRecipeService;
