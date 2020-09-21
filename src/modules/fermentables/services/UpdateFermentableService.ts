import { request } from "express";
import { getCustomRepository } from "typeorm";

import Fermentable from "../infra/typeorm/entities/Fermentable";

import FermentablesRepository from "../repositories/FermentablesRepository";

interface Request {
  id: string;
  fermentable_name: string;
  fermentable_color: number;
  fermentable_potential: number;
}

class UpdateFermentableService {
  public async execute({
    id,
    fermentable_name,
    fermentable_color,
    fermentable_potential,
  }: Request): Promise<Fermentable> {
    const fermentablesRepository = getCustomRepository(FermentablesRepository);

    const fermentable = await fermentablesRepository.update(id, {
      fermentable_name,
      fermentable_color,
      fermentable_potential,
    });

    const updatedFermentable = await fermentablesRepository.find({
      id: `${id}`,
    });

    return updatedFermentable[0];
  }
}

export default UpdateFermentableService;
