import Fermentable from "@modules/fermentables/infra/typeorm/entities/Fermentable";
import ICreateFermentableDTO from "@modules/fermentables/dtos/ICreateFermentableDTO";
import IUpdateFermentableDTO from "@modules/fermentables/dtos/IUpdateFermentableDTO";

export default interface IFermentables {
	create(data: ICreateFermentableDTO): Promise<Fermentable>;
	// findByDate(date: Date): Promise<Fermentable | undefined>;
	// delete(id: string): Promise<undefined>;
	// findById(id: string): Promise<Fermentable>;
	// update(id: IUpdateFermentableDTO): Promise<Fermentable>;
	// findAll(): Promise<Fermentable[]>;
}
