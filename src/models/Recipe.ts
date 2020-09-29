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

import User from "./User";
import HopsRecipe from "./HopsRecipe";
import YeastsRecipe from "./YeastsRecipe";
import MaltsRecipe from "./MaltsRecipe";
import Malt from "./Malt";

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

  @OneToMany(() => MaltsRecipe, (malts_recipe) => malts_recipe.recipe_id, {
    cascade: true,
  })
  malts_recipe: MaltsRecipe[];

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
