import { getCustomRepository } from "typeorm";

import Yeast from "../infra/typeorm/entities/Yeast";

import YeastRepository from "../repositories/YeastsRepository";

interface IRequest {
    id: string;
    name: string;
    short_description: string;
    origin_style: string;
    description: string;
}

class UpdateYeastService {
    public async execute({
        id,
        name,
        short_description,
        origin_style,
        description,
    }: IRequest): Promise<Yeast> {
        const yeastRepository = getCustomRepository(YeastRepository);

        const yeast = yeastRepository.update(id, {
            name,
            short_description,
            origin_style,
            description,
        });

        const updateYeast = await yeastRepository.find({ id: `${id}` });

        return updateYeast[0];
    }
}

export default UpdateYeastService;
