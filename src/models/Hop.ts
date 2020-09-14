import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("hops")
class Hop {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  hopName: string;

  @Column("decimal")
  hopAlphaAcid: number;

  @Column()
  hopType: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Hop;
