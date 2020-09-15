import { EntityRepository, Repository } from "typeorm";

import Yeast from "../models/Yeast";

@EntityRepository(Yeast)
class YeastRepository extends Repository<Yeast> {
  public findByDate(): null {
    return null;
  }
}

export default YeastRepository;
