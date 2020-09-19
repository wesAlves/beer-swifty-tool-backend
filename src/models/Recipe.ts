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

@Entity("recipes")
class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  recipe_name: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "owner_id" })
  owner_id: User;

  @OneToMany(() => HopsRecipe, (hops_recipe) => hops_recipe.recipe_id, {
    cascade: true,
  })
  hops_recipe: HopsRecipe[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipe;
