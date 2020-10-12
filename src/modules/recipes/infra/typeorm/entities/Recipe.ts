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

import User from "@modules/users/infra/typeorm/entities/User";
import HopsRecipe from "@modules/hops/infra/typeorm/entities/HopsRecipe";
import YeastsRecipe from "@modules/yeasts/infra/typeorm/entities/YeastsRecipe";
import FermentablesRecipe from "@modules/fermentables/infra/typeorm/entities/FermentablesRecipe";
import Fermentable from "@modules/fermentables/infra/typeorm/entities/Fermentable";
import BeerStyle from "@modules/beerStyles/infra/typeorm/entities/BeerStyles";

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

    @Column()
    owner_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "owner_id" })
    owner: User;

    @OneToMany(() => HopsRecipe, (hops_recipe) => hops_recipe.recipe_id, {
        cascade: true,
        onUpdate: "CASCADE",
        eager: true,
    })
    hops_recipe: HopsRecipe[];

    @OneToMany(
        () => FermentablesRecipe,
        (fermentables_recipe) => fermentables_recipe.recipe_id,
        {
            cascade: true,
            onUpdate: "CASCADE",
            eager: true,
        }
    )
    fermentables_recipe: FermentablesRecipe[];

    @OneToMany(() => YeastsRecipe, (yeasts_recipe) => yeasts_recipe.recipe_id, {
        cascade: true,
        onUpdate: "CASCADE",
        eager: true,
    })
    yeasts_recipe: YeastsRecipe[];

    @ManyToOne(() => BeerStyle)
    @JoinColumn({ name: "style_id" })
    style_id: string;

    @CreateDateColumn("timestamp")
    created_at: Date;

    @UpdateDateColumn("timestamp")
    updated_at: Date;
}

export default Recipe;
