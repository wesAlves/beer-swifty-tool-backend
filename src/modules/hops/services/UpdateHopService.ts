import { getCustomRepository } from "typeorm";
import HopsRepository from "@modules/hops/repositories/HopsRepository";
import Hop from "../infra/typeorm/entities/Hop";

interface IRequest {
    id: string;
    name: string;
    alpha_acid: number;
    type: string;
    description: string;
    origin: string;
    cohulome: number;
    oil_total: number;
    beta_acid: number;
    short_description: string;
}

class UpdateHopService {
    public async execute({
        id,
        name,
        alpha_acid,
        type,
        description,
        origin,
        cohulome,
        oil_total,
        beta_acid,
        short_description,
    }: IRequest): Promise<Hop> {
        const hopsRepository = getCustomRepository(HopsRepository);

        const hop = await hopsRepository.update(id, {
            id,
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

        const updatedHop = await hopsRepository.find({ id: `${id}` });

        return updatedHop[0];
    }
}

export default UpdateHopService;
