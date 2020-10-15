import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import HopsRecipe from "./HopsRecipe";

@Entity("hops")
class Hop {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(() => HopsRecipe, (hops_recipe) => hops_recipe.hop_id, {
        cascade: ["insert", "update"],
    })
    recipes_hops: HopsRecipe[];

    @Column("decimal")
    alpha_acid: number;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    origin: string;

    @Column("decimal")
    cohulome: number;

    @Column("decimal")
    oil_total: number;

    @Column("decimal")
    beta_acid: number;

    @Column()
    short_description: string;

    // @OneToMany(() => HopsRecipe, (hopsRecipe) => hopsRecipe.id)
    // hopsRecipe: HopsRecipe;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Hop;
