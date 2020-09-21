import { Router } from "express";
import { getCustomRepository } from "typeorm";

import FermentablesRepository from "../../modules/fermentables/repositories/FermentablesRepository";
import CreateFermentableService from "../../modules/fermentables/services/CreateFermentableService";
import UpdateFermentableService from "../../modules/fermentables/services/UpdateFermentableService";
import DeleteFermentableService from "../../modules/fermentables/services/DeleteFermentableService";

const fermentablesRouter = Router();

fermentablesRouter.post("/", async (request, response) => {
  const {
    fermentable_name,
    fermentable_color,
    fermentable_potential,
  } = request.body;

  const createFermentable = new CreateFermentableService();

  const fermentable = await createFermentable.execute({
    fermentable_name,
    fermentable_color,
    fermentable_potential,
  });

  return response.json(fermentable);
});

fermentablesRouter.get("/", async (request, response) => {
  const fermentablesRepository = getCustomRepository(FermentablesRepository);
  const fermentables = await fermentablesRepository.find();

  response.json(fermentables);
});

fermentablesRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const {
    fermentable_name,
    fermentable_color,
    fermentable_potential,
  } = request.body;

  const updateFermentable = new UpdateFermentableService();

  const fermentable = await updateFermentable.execute({
    id,
    fermentable_name,
    fermentable_color,
    fermentable_potential,
  });

  return response.json(fermentable);
});

fermentablesRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const deleteFermentable = new DeleteFermentableService();

  await deleteFermentable.execute(id);

  return response.status(204).send();
});

export default fermentablesRouter;
