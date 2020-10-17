import { getCustomRepository } from "typeorm";

import Hop from "../infra/typeorm/entities/Hop";

import HopsRepository from "@modules/hops/repositories/HopsRepository";

interface Request {
    name: string;
    alpha_acid: number;
    type: string;
    description: string;
    origin?: string;
    cohulome?: number;
    oil_total?: number;
    beta_acid?: number;
    short_description: string;
}

class CreateHopService {
    public async execute({
        name,
        alpha_acid,
        type,
        description,
        origin,
        cohulome,
        oil_total,
        beta_acid,
        short_description,
    }: Request): Promise<Hop> {
        const hopsRepository = getCustomRepository(HopsRepository);

        const hop = hopsRepository.create({
            name,
            alpha_acid,
            type,
            description,
            origin,
            cohulome,
            oil_total,
            beta_acid,
            short_description,
        });

        await hopsRepository.save(hop);

        return hop;
    }
}

export default CreateHopService;
