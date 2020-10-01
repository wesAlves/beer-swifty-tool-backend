import HopsRecipe from "@modules/hops/infra/typeorm/entities/HopsRecipe";
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
	}: IRequest): Promise<any> {
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
			// console.log(oldRecipe);
			await recipeRepository.save({
				recipe_name,
				hops_recipe: hops,
				fermentables_recipe: fermentables,
				yeasts_recipe: yeasts,
				srm,
				og,
				fg,
				description,
			});
		}

		const updatedRecipe = await recipeRepository.findOne({ id });

		return updatedRecipe;
	}
}

export default UpdateRecipeService;
