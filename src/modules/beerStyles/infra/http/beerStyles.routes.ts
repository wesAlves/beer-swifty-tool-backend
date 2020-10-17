import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";

import BeerStylesRepository from "@modules/beerStyles/infra/typeorm/repositories/BeerStylesRepository";

const beerStylesRoutes = Router();

beerStylesRoutes.get("/", async (request, response) => {
    const beerStyleRepository = getCustomRepository(BeerStylesRepository);

    const beerStyles = await beerStyleRepository.find();

    return response.json(beerStyles);
});

beerStylesRoutes.post("/", async (request, response) => {
    const {
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
    } = request.body;

    const beerStyleRepository = getCustomRepository(BeerStylesRepository);

    const beerStyle = beerStyleRepository.create({
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

    beerStyleRepository.save(beerStyle);

    return response.json(beerStyle);
});

beerStylesRoutes.delete("/:id", async (request, response) => {
    const { id } = request.params;

    const beerStyleRepository = getCustomRepository(BeerStylesRepository);

    await beerStyleRepository.delete({ id: `${id}` });

    return response.status(204).send();
});

export default beerStylesRoutes;
