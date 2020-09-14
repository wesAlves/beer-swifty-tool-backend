import { getCustomRepository } from "typeorm";

// import AppError from "../errors/AppErrors";

import MaltsRepository from "../../repositories/MaltsRepository";

class DeleteMaltService {
  public async execute(id: string): Promise<void> {
    const maltsRepository = getCustomRepository(MaltsRepository);

    // TODO treat the error catcher
    // const malt = await maltsRepository.findOne(id);
    // if (!malt) {
    //   // throw new AppError("Malt does not exists!!!");
    //   return;
    // }

    await maltsRepository.delete({ id: `${id}` });
  }
}

export default DeleteMaltService;
