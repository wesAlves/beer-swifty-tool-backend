import { EntityRepository, Repository } from "typeorm";

import Recipe from "../infra/typeorm/entities/Recipe";

@EntityRepository(Recipe)
class RecipeRepository extends Repository<Recipe> {
  public findByDate(): null {
    return null;
  }
}

export default RecipeRepository;
