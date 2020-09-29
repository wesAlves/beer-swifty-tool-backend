import { Router } from "express";
import { getCustomRepository } from "typeorm";

import MaltsRepository from "../repositories/MaltsRepository";
import CreateMaltService from "../services/MaltsServices/CreateMaltService";
import UpdateMaltService from "../services/MaltsServices/UpdateMaltService";
import DeleteMaltService from "../services/MaltsServices/DeleteMaltService";

const maltsRouter = Router();

maltsRouter.post("/", async (request, response) => {
  const { malt_name, malt_color, malt_potential } = request.body;

  const createMalt = new CreateMaltService();

  const malt = await createMalt.execute({
    malt_name,
    malt_color,
    malt_potential,
  });

  return response.json(malt);
});

maltsRouter.get("/", async (request, response) => {
  const maltsRepository = getCustomRepository(MaltsRepository);
  const malts = await maltsRepository.find();

  response.json(malts);
});

maltsRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { malt_name, malt_color, malt_potential } = request.body;

  const updateMalt = new UpdateMaltService();

  const malt = await updateMalt.execute({
    id,
    malt_name,
    malt_color,
    malt_potential,
  });

  return response.json(malt);
});

maltsRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const deleteMalt = new DeleteMaltService();

  await deleteMalt.execute(id);

  return response.status(204).send();
});

export default maltsRouter;
