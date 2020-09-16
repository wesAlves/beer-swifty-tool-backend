import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import User from "./User";
import Recipe from "./Recipe";

@Entity("recipesUser")
class RecipesUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Recipe)
  @JoinColumn({ name: "id" })
  recipe_id: Recipe;
}

export default RecipesUser;
