import { EntityRepository, Repository } from "typeorm";

import Fermentable from "../entities/Fermentable";

@EntityRepository(Fermentable)
class FermentablesRepository extends Repository<Fermentable> {
  public findByDate(): null {
    return null;
  }
}

export default FermentablesRepository;
