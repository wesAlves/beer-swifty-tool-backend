import Fermentable from "../infra/typeorm/entities/Fermentable";

import IFermentablesRepository from "../infra/repositories/IFrementablesRepository";

interface IRequest {
	id: string;
	fermentable_name: string;
	fermentable_color: number;
	fermentable_potential: number;
}

class UpdateFermentableService {
	constructor(private fermentablesRepository: IFermentablesRepository) {}
	public async execute({
		id,
		fermentable_name,
		fermentable_color,
		fermentable_potential,
	}: IRequest): Promise<Fermentable> {
		const fermentable = await this.fermentablesRepository.update({
			id,
			fermentable_name,
			fermentable_color,
			fermentable_potential,
		});

		return fermentable;
	}
}

export default UpdateFermentableService;
