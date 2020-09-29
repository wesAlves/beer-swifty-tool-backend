import { getCustomRepository } from "typeorm";

import Yeast from "../../models/Yeast";
import YeastRepository from "../../repositories/YeastsRepository";

interface Request {
  yeast_name: string;
}

class CreateYeastService {
  public async execute({ yeast_name }: Request): Promise<Yeast> {
    const yeastRepository = getCustomRepository(YeastRepository);

    const yeast = yeastRepository.create({
      yeast_name,
    });

    await yeastRepository.save(yeast);

    return yeast;
  }
}

export default CreateYeastService;
