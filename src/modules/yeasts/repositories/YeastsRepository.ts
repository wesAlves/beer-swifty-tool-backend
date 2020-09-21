import { EntityRepository, Repository } from "typeorm";

import Yeast from "../entities/Yeast";

@EntityRepository(Yeast)
class YeastRepository extends Repository<Yeast> {
  public findByDate(): null {
    return null;
  }
}

export default YeastRepository;
