import { getRepository, Repository } from "typeorm";

import Fermentable from "../entities/Fermentable";
import IFermentablesRepository from "@modules/fermentables/repositories/IFrementablesRepository";
import ICreateFermentableDTO from "@modules/fermentables/dtos/ICreateFermentableDTO";
import IUpdateFermentableDTO from "@modules/fermentables/dtos/IUpdateFermentableDTO";

class FermentablesRepository implements IFermentablesRepository {
    private ormRepository: Repository<Fermentable>;

    constructor() {
        this.ormRepository = getRepository(Fermentable);
    }
    public async delete(id: string): Promise<undefined> {
        await this.ormRepository.delete(id);
        return undefined;
    }
    findById(id: string): Promise<Fermentable> {
        throw new Error("Method not implemented.");
    }

    public async findByDate(date: Date): Promise<Fermentable | undefined> {
        const findFermentable = await this.ormRepository.findOne({
            where: { date },
        });
        return findFermentable;
    }

    public async create({
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
    }: ICreateFermentableDTO): Promise<Fermentable> {
        const fermentable = this.ormRepository.create({
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

        await this.ormRepository.save(fermentable);
        return fermentable;
    }

    public async update({
        id,
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
    }: IUpdateFermentableDTO): Promise<Fermentable> {
        const fermentable = await this.ormRepository.update(id, {
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

        const updatedFermentable = await this.ormRepository.findByIds([id]);

        return updatedFermentable[0];
    }

    public async findAll() {
        const fermentables = this.ormRepository.find();

        return fermentables;
    }
}

export default FermentablesRepository;
