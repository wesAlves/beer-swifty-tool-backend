import { getCustomRepository } from "typeorm";

import RecipeRepository from "../repositories/RecipeRepository";

class DeleteRecipeService {
	public async execute(id: string): Promise<void> {
		const recipeRepository = getCustomRepository(RecipeRepository);

		await recipeRepository.delete({ id: `${id}` });
	}
}

export default DeleteRecipeService;
