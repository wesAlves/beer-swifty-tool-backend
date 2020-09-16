import { request } from "express";
import { getCustomRepository } from "typeorm";

import Malt from "../../models/Malt";

import MaltsRepository from "../../repositories/MaltsRepository";

interface Request {
  id: string;
  malt_name: string;
  malt_color: number;
  malt_potential: number;
}

class UpdateMaltService {
  public async execute({
    id,
    malt_name,
    malt_color,
    malt_potential,
  }: Request): Promise<Malt> {
    const maltsRepository = getCustomRepository(MaltsRepository);

    const malt = await maltsRepository.update(id, {
      malt_name,
      malt_color,
      malt_potential,
    });

    const updatedMalt = await maltsRepository.find({ id: `${id}` });

    return updatedMalt[0];
  }
}

export default UpdateMaltService;
