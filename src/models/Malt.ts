import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import MaltsRecipe from "./MaltsRecipe";

@Entity("malts")
class Malt {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  malt_name: string;

  @Column("decimal")
  malt_color: number;

  @Column("decimal")
  malt_potential: number;

  @OneToMany(() => MaltsRecipe, (maslts_recipe) => maslts_recipe.malt_id, {
    cascade: true,
  })
  malts_recipe: MaltsRecipe[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Malt;
