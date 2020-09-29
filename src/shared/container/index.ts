import { container } from "tsyringe";

import IFermentablesRepository from "@modules/fermentables/repositories/IFrementablesRepository";
import FermentablesRepository from "@modules/fermentables/infra/typeorm/repositories/FermentablesRepository";

container.registerSingleton<IFermentablesRepository>(
	"FermentablesRepository",
	FermentablesRepository
);
