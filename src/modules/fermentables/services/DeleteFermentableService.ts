import IFermentablesRepository from "../infra/repositories/IFrementablesRepository";

class DeleteFermentableService {
	constructor(private fermentablesRepository: IFermentablesRepository) {}

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
