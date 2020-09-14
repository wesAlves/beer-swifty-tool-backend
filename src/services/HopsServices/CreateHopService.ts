import { getCustomRepository } from "typeorm";

import Hop from "../../models/Hop";

import HopsRepository from "../../repositories/HopsRepository";

interface Request {
  hopName: string;
  hopAlphaAcid: number;
  hopType: string;
}

class CreateHopService {
  public async execute({
    hopName,
    hopAlphaAcid,
    hopType,
  }: Request): Promise<Hop> {
    const hopsRepository = getCustomRepository(HopsRepository);

    const hop = hopsRepository.create({
      hopName,
      hopAlphaAcid,
      hopType,
    });

    await hopsRepository.save(hop);

    return hop;
  }
}

export default CreateHopService;
