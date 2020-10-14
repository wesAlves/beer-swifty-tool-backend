import { getRepository } from "typeorm";

import BeerStyles from "../infra/typeorm/entities/BeerStyles";

interface IRequest {
    id: string;
    name: string;
    description: string;
    history: string;
    fg: number;
    og: number;
    ibu: number;
    color: number;
    abv: number;
    img_url: number;
}
class CreateBeerStyleServive {
    public async execute({
        id,
        name,
        description,
        history,
        fg,
        og,
        ibu,
        color,
        abv,
        img_url,
    }: IRequest): Promise<BeerStyles> {
        const beerStyleRepository = getRepository(BeerStyles);

        const beerStyle = beerStyleRepository.create({
            id,
            name,
            description,
            history,
            fg,
            og,
            ibu,
            color,
            abv,
            img_url,
        });

        return beerStyle;
    }
}

export default CreateBeerStyleServive;
