import { getCustomRepository } from "typeorm";

import Yeast from "../infra/typeorm/entities/Yeast";
import YeastRepository from "../repositories/YeastsRepository";

interface IRequest {
    name: string;
    short_description: string;
    origin_style: string;
    description: string;
}

class CreateYeastService {
    public async execute({
        name,
        short_description,
        origin_style,
        description,
    }: IRequest): Promise<Yeast> {
        const yeastRepository = getCustomRepository(YeastRepository);

        const yeast = yeastRepository.create({
            name,
            short_description,
            origin_style,
            description,
        });

        await yeastRepository.save(yeast);

        return yeast;
    }
}

export default CreateYeastService;
