import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Malt from "./Malt";
import Recipe from "./Recipe";

@Entity("malts_recipe")
class MaltsRecipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Malt, (malt) => malt.malts_recipe)
  @JoinColumn({ name: "malt_id" })
  malt_id: Malt[];

  @ManyToOne(() => Recipe, (recipe) => recipe.hops_recipe)
  @JoinColumn({ name: "recipe_id" })
  recipe_id: Recipe[];

  @Column("decimal")
  malt_quantity: number;

  @Column("decimal")
  malt_potential: number;

  @Column("decimal")
  malt_color: number;
}

export default MaltsRecipe;
