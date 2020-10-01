import { Router } from "express";

import fermentablesRouter from "@modules/fermentables/infra/http/routes/fermentables.routes";
import hopsRouter from "@modules/hops/infra/http/routes/hops.routes";
import yeastsRouter from "@modules/yeasts/infra/http/routes/yeasts.routes";
import recipeRoutes from "@modules/recipes/infra/http/routes/recipes.routes";
import userRoutes from "@modules/users/infra/http/routes/users.routes";
import sessionsRouter from "@modules/sessions/infra/http/routes/sessions.routes";

const routes = Router();
routes.use("/fermentables", fermentablesRouter); // use to auto manage the route and find methods
routes.use("/hops", hopsRouter); // use to auto manage the route and find methods
routes.use("/yeasts", yeastsRouter); // use to auto manage the route and find methods
routes.use("/recipes", recipeRoutes); // use to auto manage the route and find methods
routes.use("/users", userRoutes); // use to auto manage the route and find methods
routes.use("/sessions", sessionsRouter); // use to auto manage the route and find methods

export default routes;
