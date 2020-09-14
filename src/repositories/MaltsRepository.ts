import { EntityRepository, Repository } from "typeorm";

import Malt from "../models/Malt";

@EntityRepository(Malt)
class MaltsRepository extends Repository<Malt> {
  public findByDate(): null {
    return null;
  }
}

export default MaltsRepository;
