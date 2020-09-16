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
  hop_name: string;

  @Column("decimal")
  hop_alpha_accid: number;

  @Column()
  hop_type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Hop;
