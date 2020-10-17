import { EntityRepository, Repository } from "typeorm";

import BeerStyles from "../entities/BeerStyles";

@EntityRepository(BeerStyles)
class BeerStylesRepository extends Repository<BeerStyles> {
    public findByDate(): null {
        return null;
    }
}

export default BeerStylesRepository;
