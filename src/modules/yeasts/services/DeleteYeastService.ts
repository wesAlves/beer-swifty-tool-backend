import { getCustomRepository } from "typeorm";
import YeastRepository from "../repositories/YeastsRepository";

class DeleteYeastService {
  public async execute(id: string): Promise<void> {
    const yeastRepository = getCustomRepository(YeastRepository);

    await yeastRepository.delete({ id: `${id}` });
  }
}

export default DeleteYeastService;
