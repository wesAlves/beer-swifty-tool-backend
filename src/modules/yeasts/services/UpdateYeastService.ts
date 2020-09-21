import { getCustomRepository } from "typeorm";

import Yeast from "../../models/Yeast";

import YeastRepository from "../../repositories/YeastsRepository";

interface Request {
  id: string;
  yeast_name: string;
}

class UpdateYeastService {
  public async execute({ id, yeast_name }: Request): Promise<Yeast> {
    const yeastRepository = getCustomRepository(YeastRepository);

    const yeast = yeastRepository.update(id, {
      yeast_name,
    });

    const updateYeast = await yeastRepository.find({ id: `${id}` });

    return updateYeast[0];
  }
}

export default UpdateYeastService;
