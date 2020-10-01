// import { uuid } from "uuidv4";

// import Fermentable from "../../infra/typeorm/entities/Fermentable";
// import IFermentablesRepository from "@modules/fermentables/repositories/IFrementablesRepository";
// import ICreateFermentableDTO from "@modules/fermentables/dtos/ICreateFermentableDTO";
// import IUpdateFermentableDTO from "@modules/fermentables/dtos/IUpdateFermentableDTO";
// import { getCustomRepository } from "typeorm";

// class FermentablesRepository implements IFermentablesRepository {
// 	private fermentables: Fermentable[] = [];

// 	public async delete(id: string): Promise<undefined> {
// 		await this.fermentables.splice(0, 1);

// 		return undefined;
// 	}

// 	public async create({
// 		fermentable_name,
// 		fermentable_color,
// 		fermentable_potential,
// 	}: ICreateFermentableDTO): Promise<Fermentable> {
// 		const fermentable = new Fermentable();

// 		Object.assign(fermentable, {
// 			id: uuid(),
// 			fermentable_color,
// 			fermentable_name,
// 			fermentable_potential,
// 		});

// 		this.fermentables.push(fermentable);

// 		return fermentable;
// 	}
// 	public async update({
// 		id,
// 		fermentable_name,
// 		fermentable_color,
// 		fermentable_potential,
// 	}: IUpdateFermentableDTO): Promise<Fermentable> {}

// 	// public async findAll() {
// 	// 	throw new Error("Method not implemented.");
// 	// }
// }

// export default FermentablesRepository;
