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
    name: string;

    @Column()
    short_description: string;

    @Column()
    origin_style: string;

    @Column()
    description: string;

    @OneToMany(() => YeastsRecipe, (yeasts_recipe) => yeasts_recipe.yeast_id, {
        cascade: ["insert", "update"],
    })
    yeasts_recipe: YeastsRecipe[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Yeast;
