import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToMany,
} from "typeorm";

import User from "../../users/entities/User";
import HopsRecipe from "../../../shared/entities/HopsRecipe";
import YeastsRecipe from "../../yeasts/entities/YeastsRecipe";
import FermentablesRecipe from "../../../shared/entities/FermentablesRecipe";
import Fermentable from "../../fermentables/entities/Fermentable";

@Entity("recipes")
class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  recipe_name: string;

  @Column("decimal")
  srm: number;

  @Column("decimal")
  og: number;

  @Column("decimal")
  fg: number;

  @Column()
  description: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "owner_id" })
  owner_id: User;

  @OneToMany(() => HopsRecipe, (hops_recipe) => hops_recipe.recipe_id, {
    cascade: true,
  })
  hops_recipe: HopsRecipe[];

  @OneToMany(
    () => FermentablesRecipe,
    (fermentables_recipe) => fermentables_recipe.recipe_id,
    {
      cascade: true,
    }
  )
  fermentables_recipe: FermentablesRecipe[];

  @OneToMany(() => YeastsRecipe, (yeasts_recipe) => yeasts_recipe.recipe_id, {
    cascade: true,
  })
  yeasts_recipe: YeastsRecipe[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipe;
