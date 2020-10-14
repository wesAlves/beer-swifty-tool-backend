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
    name: string;

    @Column("decimal")
    color: number;

    @Column("decimal")
    potential: number;

    @Column()
    manufacture: string;

    @Column()
    origin: string;

    @Column("decimal")
    water_percentage: number;

    @Column("decimal")
    protein_percentage: number;

    @Column("decimal")
    diastatic_potential: number;

    @Column()
    short_description: string;

    @Column()
    description: string;

    @OneToMany(
        () => FermentablesRecipe,
        (maslts_recipe) => maslts_recipe.fermentable_id,
        {
            cascade: true,
            onUpdate: "CASCADE",
        }
    )
    fermentables_recipe: FermentablesRecipe[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Fermentable;
