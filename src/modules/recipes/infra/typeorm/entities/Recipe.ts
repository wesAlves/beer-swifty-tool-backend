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
    name: string;

    @Column("decimal")
    color: number;

    @Column("decimal")
    og: number;

    @Column("decimal")
    fg: number;

    @Column("decimal")
    ibu: number;

    @Column("decimal")
    abv: number;

    @Column("decimal")
    final_volume: number;

    @Column("decimal")
    global_efficiency: number;

    @Column()
    description: string;

    @Column()
    short_description: string;

    @Column()
    notes: string;

    @Column()
    img_url: string;

    @Column()
    privete: boolean;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    owner: User;

    @OneToMany(() => HopsRecipe, (hops_recipe) => hops_recipe.recipe_id, {
        cascade: ["insert", "update"],
        eager: true,
    })
    hops_recipe: HopsRecipe[];

    @OneToMany(
        () => FermentablesRecipe,
        (fermentables_recipe) => fermentables_recipe.recipe_id,
        {
            cascade: ["insert", "update"],
            eager: true,
        }
    )
    fermentables_recipe: FermentablesRecipe[];

    @OneToMany(() => YeastsRecipe, (yeasts_recipe) => yeasts_recipe.recipe_id, {
        cascade: ["insert", "update"],
        eager: true,
    })
    yeasts_recipe: YeastsRecipe[];

    @Column()
    style_id: string;

    @ManyToOne(() => BeerStyle)
    @JoinColumn({ name: "style_id" })
    style: BeerStyle;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Recipe;
