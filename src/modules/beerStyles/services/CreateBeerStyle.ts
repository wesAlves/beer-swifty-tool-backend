import { getRepository } from "typeorm";

import BeerStyles from "../infra/typeorm/entities/BeerStyles";

interface IRequest {
    id: string;
    name: string;
    description: string;
    short_description: string;
    fg_initial: number;
    fg_final: number;
    og_initial: number;
    og_final: number;
    ibu_initial: number;
    ibu_final: number;
    color_initial: number;
    color_final: number;
    abv_initial: number;
    abv_final: number;
    img_url: number;
}
class CreateBeerStyleServive {
    public async execute({
        id,
        name,
        img_url,
        description,
        short_description,
        color_initial,
        color_final,
        abv_initial,
        abv_final,
        fg_initial,
        fg_final,
        og_initial,
        og_final,
        ibu_initial,
        ibu_final,
    }: IRequest): Promise<BeerStyles> {
        const beerStyleRepository = getRepository(BeerStyles);

        const beerStyle = beerStyleRepository.create({
            id,
            name,
            img_url,
            description,
            short_description,
            color_initial,
            color_final,
            abv_initial,
            abv_final,
            fg_initial,
            fg_final,
            og_initial,
            og_final,
            ibu_initial,
            ibu_final,
        });

        return beerStyle;
    }
}

export default CreateBeerStyleServive;
