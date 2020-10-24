import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Hop from './Hop';
import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';

@Entity('hops_recipe')
class HopsRecipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.hops_recipe)
  @JoinColumn({ name: 'recipe_id' })
  recipe_id: Recipe;

  @ManyToOne(() => Hop, (hop) => hop.recipes_hops)
  @JoinColumn({ name: 'hop_id' })
  hop_id: Hop;

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
  quantity: number;

  @Column()
  add_type: string;

  @Column('int', {
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseInt(value);
      },
    },
  })
  add_time: number;
}

export default HopsRecipe;
