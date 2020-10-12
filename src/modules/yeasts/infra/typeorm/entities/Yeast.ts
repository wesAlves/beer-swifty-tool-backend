import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import YeastsRecipe from "./YeastsRecipe";
@Entity("yeast")
class Yeast {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    yeast_name: string;

    @OneToMany(() => YeastsRecipe, (yeasts_recipe) => yeasts_recipe.yeast_id, {
        cascade: true,
        onUpdate: "CASCADE",
    })
    yeasts_recipe: YeastsRecipe[];

    @CreateDateColumn("timestamp")
    created_at: Date;

    @UpdateDateColumn("timestamp")
    updated_at: Date;
}

export default Yeast;
