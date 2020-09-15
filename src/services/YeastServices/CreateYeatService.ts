import { getCustomRepository } from "typeorm";

import Yeast from "../../models/Yeast";
import YeastRepository from "../../repositories/YeastsRepository";

interface Request {
  yeastName: string;
}

class CreateYeastService {
  public async execute({ yeastName }: Request): Promise<Yeast> {
    const yeastRepository = getCustomRepository(YeastRepository);

    const yeast = yeastRepository.create({
      yeastName,
    });

    await yeastRepository.save(yeast);

    return yeast;
  }
}

export default CreateYeastService;
