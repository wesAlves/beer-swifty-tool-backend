import { Router } from "express";

import maltsRouter from "./malts.routes";
import hopsRouter from "./hops.routes";
import yeastsRouter from "./yeasts.routes";
import recipeRoutes from "./recipes.routes";
import userRoutes from "./users.routes";

const routes = Router();

routes.use("/malts", maltsRouter); // use to auto manage the route and find methods
routes.use("/hops", hopsRouter); // use to auto manage the route and find methods
routes.use("/yeasts", yeastsRouter); // use to auto manage the route and find methods
routes.use("/recipes", recipeRoutes); // use to auto manage the route and find methods
routes.use("/users", userRoutes); // use to auto manage the route and find methods

export default routes;
