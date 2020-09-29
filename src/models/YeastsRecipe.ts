import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import Yeast from "./Yeast";
import Recipe from "./Recipe";

@Entity("yeasts_recipe")
class YeastsRecipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Yeast, (yeast) => yeast.yeasts_recipe)
  @JoinColumn({ name: "yeast_id" })
  yeast_id: Yeast[];

  @ManyToOne(() => Recipe, (recipe) => recipe.hops_recipe)
  @JoinColumn({ name: "recipe_id" })
  recipe_id: Recipe[];
}

export default YeastsRecipe;
