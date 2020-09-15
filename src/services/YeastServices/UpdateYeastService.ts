import { getCustomRepository } from "typeorm";

import Yeast from "../../models/Yeast";

import YeastRepository from "../../repositories/YeastsRepository";

interface Request {
  id: string;
  yeastName: string;
}

class UpdateYeastService {
  public async execute({ id, yeastName }: Request): Promise<Yeast> {
    const yeastRepository = getCustomRepository(YeastRepository);

    const yeast = yeastRepository.update(id, {
      yeastName,
    });

    const updateYeast = await yeastRepository.find({ id: `${id}` });

    return updateYeast[0];
  }
}

export default UpdateYeastService;
