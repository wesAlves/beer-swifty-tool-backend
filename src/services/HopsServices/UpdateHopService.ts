import { getCustomRepository } from "typeorm";
import HopsRepository from "../../repositories/HopsRepository";
import Hop from "../../models/Hop";

interface Request {
  id: string;
  hopName: string;
  hopAlphaAcid: number;
  hopType: string;
}

class UpdateHopService {
  public async execute({
    id,
    hopName,
    hopAlphaAcid,
    hopType,
  }: Request): Promise<Hop> {
    const hopsRepository = getCustomRepository(HopsRepository);

    const hop = await hopsRepository.update(id, {
      hopName,
      hopAlphaAcid,
      hopType,
    });

    const updatedHop = await hopsRepository.find({ id: `${id}` });

    return updatedHop[0];
  }
}

export default UpdateHopService;
