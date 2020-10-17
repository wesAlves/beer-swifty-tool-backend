import { Router } from "express";
import { container } from "tsyringe";

import FermentablesRepository from "@modules/fermentables/infra/typeorm/repositories/FermentablesRepository";
import CreateFermentableService from "@modules/fermentables/services/CreateFermentableService";
import UpdateFermentableService from "@modules/fermentables/services/UpdateFermentableService";
import DeleteFermentableService from "@modules/fermentables/services/DeleteFermentableService";

const fermentablesRouter = Router();

fermentablesRouter.post("/", async (request, response) => {
    const {
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
    } = request.body;

    const createFermentable = container.resolve(CreateFermentableService);

    const fermentable = await createFermentable.execute({
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

    return response.json(fermentable);
});

fermentablesRouter.get("/", async (request, response) => {
    const fermentablesRepository = new FermentablesRepository();

    const fermentables = await fermentablesRepository.findAll();

    response.json(fermentables);
});

fermentablesRouter.put("/:id", async (request, response) => {
    const { id } = request.params;
    const {
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
    } = request.body;

    const updateFermentable = container.resolve(UpdateFermentableService);

    const fermentable = await updateFermentable.execute({
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
    });

    return response.json(fermentable);
});

fermentablesRouter.delete("/:id", async (request, response) => {
    const { id } = request.params;

    const deleteFermentable = container.resolve(DeleteFermentableService);

    await deleteFermentable.execute(id);

    return response.status(204).send();
});

export default fermentablesRouter;
