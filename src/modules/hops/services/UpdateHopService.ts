import { getCustomRepository } from "typeorm";
import HopsRepository from "@modules/hops/repositories/HopsRepository";
import Hop from "../infra/typeorm/entities/Hop";

interface IRequest {
	id: string;
	hop_name: string;
	hop_alpha_acid: number;
	hop_type: string;
}

class UpdateHopService {
	public async execute({
		id,
		hop_name,
		hop_alpha_acid,
		hop_type,
	}: IRequest): Promise<Hop> {
		const hopsRepository = getCustomRepository(HopsRepository);

		const hop = await hopsRepository.update(id, {
			hop_name,
			hop_alpha_acid,
			hop_type,
		});

		const updatedHop = await hopsRepository.find({ id: `${id}` });

		return updatedHop[0];
	}
}

export default UpdateHopService;
