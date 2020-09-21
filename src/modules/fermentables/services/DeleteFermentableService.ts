import { getCustomRepository } from "typeorm";

// import AppError from "../errors/AppErrors";

import FermentablesRepository from "../../repositories/FermentablesRepository";

class DeleteFermentableService {
  public async execute(id: string): Promise<void> {
    const fermentablesRepository = getCustomRepository(FermentablesRepository);

    // TODO treat the error catcher
    // const fermentable = await fermentablesRepository.findOne(id);
    // if (!fermentable) {
    //   // throw new AppError("Fermentable does not exists!!!");
    //   return;
    // }

    await fermentablesRepository.delete({ id: `${id}` });
  }
}

export default DeleteFermentableService;
