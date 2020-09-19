import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Yeast from "./Yeast";

@Entity("yeasts_recipe")
class YeastsRecipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Yeast, (yeast) => yeast.id)
  yeast_id: Yeast[];

  @Column("decimal")
  yeast_quantity: number;

  @Column("decimal")
  yeast_add_type: string;

  @Column("int")
  yeast_add_time: number;
}

export default YeastsRecipe;
