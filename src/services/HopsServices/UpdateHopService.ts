import { getCustomRepository } from "typeorm";
import HopsRepository from "../../repositories/HopsRepository";
import Hop from "../../models/Hop";

interface Request {
  id: string;
  hop_name: string;
  hop_alpha_accid: number;
  hop_type: string;
}

class UpdateHopService {
  public async execute({
    id,
    hop_name,
    hop_alpha_accid,
    hop_type,
  }: Request): Promise<Hop> {
    const hopsRepository = getCustomRepository(HopsRepository);

    const hop = await hopsRepository.update(id, {
      hop_name,
      hop_alpha_accid,
      hop_type,
    });

    const updatedHop = await hopsRepository.find({ id: `${id}` });

    return updatedHop[0];
  }
}

export default UpdateHopService;
