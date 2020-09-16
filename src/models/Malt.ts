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
  malt_name: string;

  @Column("decimal")
  malt_color: number;

  @Column("decimal")
  malt_potential: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Malt;
