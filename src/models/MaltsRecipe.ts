import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Malt from "./Malt";

@Entity("malts_recipe")
class MaltsRecipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Malt, (malt) => malt.id)
  malt_id: Malt[];

  @Column("decimal")
  malt_quantity: number;

  @Column("decimal")
  malt_add_type: string;

  @Column("int")
  malt_add_time: number;
}

export default MaltsRecipe;
