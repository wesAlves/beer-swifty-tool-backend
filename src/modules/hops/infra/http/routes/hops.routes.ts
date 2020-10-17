import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import HopsRepository from "@modules/hops/repositories/HopsRepository";
import CreateHopService from "@modules/hops/services/CreateHopService";
import DeleteHopService from "@modules/hops/services/DeleteHopService";
import UpdateHopService from "@modules/hops/services/UpdateHopService";

const hopsRouter = Router();

hopsRouter.get("/", async (request, response) => {
    const hopsRepository = getCustomRepository(HopsRepository);

    const hops = await hopsRepository.find();

    return response.json(hops);
});

hopsRouter.post("/", async (request, response) => {
    const {
        name,
        alpha_acid,
        type,
        description,
        origin,
        cohulome,
        oil_total,
        beta_acid,
        short_description,
    } = request.body;

    const createHop = new CreateHopService();

    const hop = await createHop.execute({
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

    return response.json(hop);
});

hopsRouter.put("/:id", async (request, response) => {
    const { id } = request.params;
    const {
        name,
        alpha_acid,
        type,
        description,
        origin,
        cohulome,
        oil_total,
        beta_acid,
        short_description,
    } = request.body;

    const updateHop = new UpdateHopService();

    const hop = await updateHop.execute({
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

    return response.json(hop);
});

hopsRouter.delete("/:id", async (request, response) => {
    const { id } = request.params;

    const deleteHop = new DeleteHopService();

    await deleteHop.execute(id);

    return response.status(204).send();
});

export default hopsRouter;
