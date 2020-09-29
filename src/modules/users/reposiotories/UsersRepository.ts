import { EntityRepository, Repository } from "typeorm";

import User from "../infra/typeorm/entities/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public findByDate(): null {
    return null;
  }
}

export default UserRepository;
