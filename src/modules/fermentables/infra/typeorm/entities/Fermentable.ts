import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import FermentablesRecipe from './FermentablesRecipe';

@Entity('fermentables')
class Fermentable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal', {
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseFloat(value);
      },
    },
  })
  color: number;

  @Column('decimal', {
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseFloat(value);
      },
    },
  })
  potential: number;

  @Column()
  manufacture: string;

  @Column()
  origin: string;

  @Column('decimal', {
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseFloat(value);
      },
    },
  })
  water_percentage: number;

  @Column('decimal', {
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseFloat(value);
      },
    },
  })
  protein_percentage: number;

  @Column('decimal', {
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseFloat(value);
      },
    },
  })
  diastatic_potential: number;

  @Column()
  short_description: string;

  @Column()
  description: string;

  @OneToMany(
    () => FermentablesRecipe,
    (maslts_recipe) => maslts_recipe.fermentable_id,
    {
      cascade: ['insert', 'update'],
    }
  )
  fermentables_recipe: FermentablesRecipe[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Fermentable;
