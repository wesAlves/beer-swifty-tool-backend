import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("beer_styles")
class BeerStyles {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    short_description: string;

    @Column("decimal")
    fg_initial: number;

    @Column("decimal")
    fg_final: number;

    @Column("decimal")
    og_initial: number;

    @Column("decimal")
    og_final: number;

    @Column("decimal")
    ibu_initial: number;

    @Column("decimal")
    ibu_final: number;

    @Column("decimal")
    color_initial: number;

    @Column("decimal")
    color_final: number;

    @Column("decimal")
    abv_initial: number;

    @Column("decimal")
    abv_final: number;

    @Column("decimal")
    img_url: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default BeerStyles;
