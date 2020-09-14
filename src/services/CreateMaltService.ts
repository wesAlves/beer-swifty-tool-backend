import { getCustomRepository } from "typeorm";

import Malt from "../models/Malt";

import MaltsRepository from "../repositories/MaltsRepository";

interface Request {
  maltName: string;
  maltColor: number;
  maltPotential: number;
}

class CreateMaltService {
  public async execute({
    maltName,
    maltColor,
    maltPotential,
  }: Request): Promise<Malt> {
    const maltsRepository = getCustomRepository(MaltsRepository);

    const malt = maltsRepository.create({
      maltName,
      maltColor,
      maltPotential,
    });

    await maltsRepository.save(malt);

    return malt;
  }
}

export default CreateMaltService;
