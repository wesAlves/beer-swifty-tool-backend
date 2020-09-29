import { injectable, inject } from "tsyringe";

import IFermentablesRepository from "@modules/fermentables/repositories/IFrementablesRepository";
@injectable()
class DeleteFermentableService {
	constructor(
		@inject("FermentablesRepository")
		private fermentablesRepository: IFermentablesRepository
	) {}

	public async execute(id: string): Promise<void> {
		// TODO treat the error catcher
		// const fermentable = await fermentablesRepository.findOne(id);
		// if (!fermentable) {
		//   // throw new AppError("Fermentable does not exists!!!");
		//   return;
		// }
		await this.fermentablesRepository.delete(id);
	}
}

export default DeleteFermentableService;
