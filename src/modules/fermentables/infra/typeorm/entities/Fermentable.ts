import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import FermentablesRecipe from "./FermentablesRecipe";

@Entity("fermentables")
class Fermentable {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fermentable_name: string;

    @Column("decimal")
    fermentable_color: number;

    @Column("decimal")
    fermentable_potential: number;

    @OneToMany(
        () => FermentablesRecipe,
        (maslts_recipe) => maslts_recipe.fermentable_id,
        {
            cascade: true,
            onUpdate: "CASCADE",
        }
    )
    fermentables_recipe: FermentablesRecipe[];

    @CreateDateColumn("timeStamp")
    created_at: Date;

    @UpdateDateColumn("timeStamp")
    updated_at: Date;
}

export default Fermentable;
