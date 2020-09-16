import { getCustomRepository } from "typeorm";

import Malt from "../../models/Malt";

import MaltsRepository from "../../repositories/MaltsRepository";

interface Request {
  malt_name: string;
  malt_color: number;
  malt_potential: number;
}

class CreateMaltService {
  public async execute({
    malt_name,
    malt_color,
    malt_potential,
  }: Request): Promise<Malt> {
    const maltsRepository = getCustomRepository(MaltsRepository);

    const malt = maltsRepository.create({
      malt_name,
      malt_color,
      malt_potential,
    });

    await maltsRepository.save(malt);

    return malt;
  }
}

export default CreateMaltService;
