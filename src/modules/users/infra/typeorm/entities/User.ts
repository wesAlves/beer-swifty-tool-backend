import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import Recipe from "@modules/recipes/infra/typeorm/entities/Recipe";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    user_name: string;

    @Column()
    avatar_url: string;

    @Column()
    shop: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
