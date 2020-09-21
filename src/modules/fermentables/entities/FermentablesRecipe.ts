import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Fermentable from "./Fermentable";
import Recipe from "../../modules/recipes/entities/Recipe";

@Entity("fermentables_recipe")
class FermentablesRecipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(
    () => Fermentable,
    (fermentable) => fermentable.fermentables_recipe
  )
  @JoinColumn({ name: "fermentable_id" })
  fermentable_id: Fermentable[];

  @ManyToOne(() => Recipe, (recipe) => recipe.hops_recipe)
  @JoinColumn({ name: "recipe_id" })
  recipe_id: Recipe[];

  @Column("decimal")
  fermentable_quantity: number;

  @Column("decimal")
  fermentable_potential: number;

  @Column("decimal")
  fermentable_color: number;
}

export default FermentablesRecipe;
