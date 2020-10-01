// import FakeFermentableRepository from "../repositories/fakes/FakeFermentablesRepository";
// import DeleteFrementableService from "./DeleteFermentableService";
// import CreateFermentableService from "./CreateFermentableService";
// import { empty } from "uuidv4";

// describe("DeleteFermentable", () => {
// 	it("Should be able to delete an existent fermentable", async () => {
// 		const fakeFermentableRepository = new FakeFermentableRepository();
// 		const createFermentable = new CreateFermentableService(
// 			fakeFermentableRepository
// 		);
// 		const deleteFermentable = new DeleteFrementableService(
// 			fakeFermentableRepository
// 		);

// 		const fermentable = await createFermentable.execute({
// 			fermentable_color: 12,
// 			fermentable_name: "Pale Ale",
// 			fermentable_potential: 1.0374,
// 		});

// 		console.log(fermentable.id);
// 		await deleteFermentable.execute(fermentable.id);

// 		expect(fermentable.id).toBeFalsy();
// 	});
// });
