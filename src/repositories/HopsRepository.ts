import { Entity, EntityRepository, Repository } from "typeorm";

import Hop from "../models/Hop";

@EntityRepository(Hop)
class HopsRepository extends Repository<Hop> {
  public findByDate(): null {
    return null;
  }
}

export default HopsRepository;
