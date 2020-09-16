import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("yeast")
class Yeast {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  yeast_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Yeast;
