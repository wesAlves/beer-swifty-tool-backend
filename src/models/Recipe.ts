import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recipes")
class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  recipeName: string;

  @Column()
  malt_id: string;

  @Column()
  yeast_id: string;

  @Column()
  hop_id: string;

  @Column()
  recipes_user: string;
}

export default Recipe;
