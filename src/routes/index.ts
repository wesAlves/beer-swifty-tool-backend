import { Router } from "express";
import maltsRouter from "./malts.routes";

const routes = Router();

routes.use("/malts", maltsRouter); // use to auto manage the route and find methods

export default routes;
