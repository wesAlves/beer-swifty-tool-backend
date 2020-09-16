import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("recipes")
class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  recipe_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipe;
