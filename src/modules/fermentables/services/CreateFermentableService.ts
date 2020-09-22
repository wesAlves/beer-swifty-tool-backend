import Fermentable from "../infra/typeorm/entities/Fermentable";
import IFermentablesRepository from "../infra/repositories/IFrementablesRepository";

interface IRequest {
	fermentable_name: string;
	fermentable_color: number;
	fermentable_potential: number;
}

class CreateFermentableService {
	constructor(private fermentablesRepository: IFermentablesRepository) {}

	public async execute({
		fermentable_name,
		fermentable_color,
		fermentable_potential,
	}: IRequest): Promise<Fermentable> {
		const fermentable = await this.fermentablesRepository.create({
			fermentable_name,
			fermentable_color,
			fermentable_potential,
		});

		return fermentable;
	}
}

export default CreateFermentableService;
