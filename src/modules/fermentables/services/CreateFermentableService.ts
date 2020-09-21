import { getCustomRepository } from "typeorm";

import Fermentable from "../infra/typeorm/entities/Fermentable";

import FermentablesRepository from "../repositories/FermentablesRepository";

interface Request {
  fermentable_name: string;
  fermentable_color: number;
  fermentable_potential: number;
}

class CreateFermentableService {
  public async execute({
    fermentable_name,
    fermentable_color,
    fermentable_potential,
  }: Request): Promise<Fermentable> {
    const fermentablesRepository = getCustomRepository(FermentablesRepository);

    const fermentable = fermentablesRepository.create({
      fermentable_name,
      fermentable_color,
      fermentable_potential,
    });

    await fermentablesRepository.save(fermentable);

    return fermentable;
  }
}

export default CreateFermentableService;
