import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import Fermentable from "./Fermentable";
import Recipe from "@modules/recipes/infra/typeorm/entities/Recipe";

@Entity("fermentables_recipe")
class FermentablesRecipe {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(
        () => Fermentable,
        (fermentable) => fermentable.fermentables_recipe
    )
    @JoinColumn({ name: "fermentable_id" })
    fermentable_id: Fermentable[];

    @ManyToOne(() => Recipe, (recipe) => recipe.hops_recipe)
    @JoinColumn({ name: "recipe_id" })
    recipe_id: Recipe[];

    @Column("decimal")
    quantity: number;

    @Column("decimal")
    potential: number;

    @Column("decimal")
    color: number;
}

export default FermentablesRecipe;
