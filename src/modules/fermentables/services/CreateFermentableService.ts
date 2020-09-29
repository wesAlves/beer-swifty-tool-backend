import Fermentable from "../infra/typeorm/entities/Fermentable";
import IFermentablesRepository from "@modules/fermentables/repositories/IFrementablesRepository";
import { injectable, inject } from "tsyringe";

interface IRequest {
	fermentable_name: string;
	fermentable_color: number;
	fermentable_potential: number;
}
@injectable()
class CreateFermentableService {
	constructor(
		@inject("FermentablesRepository")
		private fermentablesRepository: IFermentablesRepository
	) {}

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
