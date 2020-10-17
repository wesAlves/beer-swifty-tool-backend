import Fermentable from "../infra/typeorm/entities/Fermentable";
import IFermentablesRepository from "@modules/fermentables/repositories/IFrementablesRepository";
import { injectable, inject } from "tsyringe";

interface IRequest {
    name: string;
    color: number;
    potential: number;
    manufacture?: string;
    origin?: string;
    water_percentage?: number;
    protein_percentage?: number;
    diastatic_potential?: number;
    short_description: string;
    description: string;
}
@injectable()
class CreateFermentableService {
    constructor(
        @inject("FermentablesRepository")
        private fermentablesRepository: IFermentablesRepository
    ) {}

    public async execute({
        name,
        color,
        potential,
        manufacture,
        origin,
        water_percentage,
        protein_percentage,
        diastatic_potential,
        short_description,
        description,
    }: IRequest): Promise<Fermentable> {
        const fermentable = await this.fermentablesRepository.create({
            name,
            color,
            potential,
            manufacture,
            origin,
            water_percentage,
            protein_percentage,
            diastatic_potential,
            short_description,
            description,
        });

        return fermentable;
    }
}

export default CreateFermentableService;
