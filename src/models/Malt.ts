import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("malts")
class Malt {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  maltName: string;

  @Column("decimal")
  maltColor: number;

  @Column("decimal")
  maltPotential: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Malt;
