import { request } from "express";
import { getCustomRepository } from "typeorm";

import Malt from "../models/Malt";

import MaltsRepository from "../repositories/MaltsRepository";

interface Request {
  id: string;
  maltName: string;
  maltColor: number;
  maltPotential: number;
}

class UpdateMaltService {
  public async execute({
    id,
    maltName,
    maltColor,
    maltPotential,
  }: Request): Promise<Malt> {
    const maltsRepository = getCustomRepository(MaltsRepository);

    const malt = await maltsRepository.update(id, {
      maltName,
      maltColor,
      maltPotential,
    });

    const updatedMalt = await maltsRepository.findOne({ id: `${id}` });

    return updatedMalt;
  }
}

export default UpdateMaltService;
