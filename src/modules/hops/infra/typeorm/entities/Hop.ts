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
    hop_name: string;

    @OneToMany(() => HopsRecipe, (hops_recipe) => hops_recipe.hop_id, {
        cascade: true,
        onUpdate: "CASCADE",
    })
    recipes_hops: HopsRecipe[];

    @Column("decimal")
    hop_alpha_acid: number;

    @Column()
    hop_type: string;

    // @OneToMany(() => HopsRecipe, (hopsRecipe) => hopsRecipe.id)
    // hopsRecipe: HopsRecipe;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Hop;
