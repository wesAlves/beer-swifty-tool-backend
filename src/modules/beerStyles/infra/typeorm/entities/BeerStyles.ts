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
    history: string;

    @Column("decimal")
    fg: number;

    @Column("decimal")
    ibu: number;

    @Column("decimal")
    color: number;

    @Column("decimal")
    abv: number;

    @Column("decimal")
    img_url: number;

    @CreateDateColumn("timestamp")
    created_at: Date;

    @UpdateDateColumn("timestamp")
    updated_at: Date;
}
