import { Router } from "express";
import { getCustomRepository } from "typeorm";
import YeastRepository from "../repositories/YeastsRepository";
import CreateYeastService from "../services/YeastServices/CreateYeatService";
import DeleteYeastService from "../services/YeastServices/DeleteYeastService";
import UpdateYeastService from "../services/YeastServices/UpdateYeastService";

const yeastRouter = Router();

yeastRouter.get("/", async (request, response) => {
  const yeastRepository = getCustomRepository(YeastRepository);

  const yeasts = await yeastRepository.find();

  return response.json(yeasts);
});

yeastRouter.post("/", async (request, response) => {
  const { yeastName } = request.body;

  const createYeast = new CreateYeastService();

  const yeast = await createYeast.execute({
    yeastName,
  });

  return response.json(yeast);
});

yeastRouter.put("/:id", async (request, response) => {
  const { id } = request.params;

  const { yeastName } = request.body;

  const updateYeast = new UpdateYeastService();

  const yeast = await updateYeast.execute({
    id,
    yeastName,
  });

  return response.json(yeast);
});

yeastRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const deleteYeast = new DeleteYeastService();

  await deleteYeast.execute(id);

  return response.status(204).send();
});

export default yeastRouter;
