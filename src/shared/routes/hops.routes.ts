import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import HopsRepository from "../../modules/hops/repositories/HopsRepository";
import CreateHopService from "../services/HopsServices/CreateHopService";
import DeleteHopService from "../services/HopsServices/DeleteHopService";
import UpdateHopService from "../services/HopsServices/UpdateHopService";

const hopsRouter = Router();

hopsRouter.get("/", async (request, response) => {
  const hopsRepository = getCustomRepository(HopsRepository);

  const hops = await hopsRepository.find();

  return response.json(hops);
});

hopsRouter.post("/", async (request, response) => {
  const { hop_name, hop_alpha_acid, hop_type } = request.body;

  const createHop = new CreateHopService();

  const hop = await createHop.execute({
    hop_name,
    hop_alpha_acid,
    hop_type,
  });

  return response.json(hop);
});

hopsRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { hop_name, hop_alpha_acid, hop_type } = request.body;

  const updateHop = new UpdateHopService();

  const hop = await updateHop.execute({
    id,
    hop_name,
    hop_alpha_acid,
    hop_type,
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
