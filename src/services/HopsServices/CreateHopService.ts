import { getCustomRepository } from "typeorm";

import Hop from "../../models/Hop";

import HopsRepository from "../../repositories/HopsRepository";

interface Request {
  hop_name: string;
  hop_alpha_acid: number;
  hop_type: string;
}

class CreateHopService {
  public async execute({
    hop_name,
    hop_alpha_acid,
    hop_type,
  }: Request): Promise<Hop> {
    const hopsRepository = getCustomRepository(HopsRepository);

    const hop = hopsRepository.create({
      hop_name,
      hop_alpha_acid,
      hop_type,
    });

    await hopsRepository.save(hop);

    return hop;
  }
}

export default CreateHopService;
