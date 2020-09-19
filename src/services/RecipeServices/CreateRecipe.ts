import { getCustomRepository, getRepository } from "typeorm";

import Recipe from "../../models/Recipe";
import RecipeRepository from "../../repositories/RecipeRepository";

interface Request {
  recipe_name: string;
  owner_id: string;
  hops: [];
}

class CreateRecipeService {
  public async execute({
    recipe_name,
    owner_id,
    hops,
  }: Request): Promise<Recipe> {
    const recipeRepository = getRepository(Recipe);

    const recipe = recipeRepository.create({
      owner_id,
      recipe_name,
      hops_recipe: hops,
      hop_quantity: 10,
      hop_add_type: "12",
      hop_add_time: 12,
    });

    await recipeRepository.save(recipe);

    return recipe;
  }
}

export default CreateRecipeService;
