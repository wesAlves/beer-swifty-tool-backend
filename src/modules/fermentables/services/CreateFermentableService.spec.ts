// import FakeFermentablesRepository from "../repositories/fakes/FakeFermentablesRepository";
// import CreateFermentableService from "./CreateFermentableService";

// describe("CreateFermentable", () => {
// 	it("Should be able to create a new Fermentable", async () => {
// 		const fakeFermentablesRepository = new FakeFermentablesRepository();
// 		const createFermentable = new CreateFermentableService(
// 			fakeFermentablesRepository
// 		);

// 		const fermentable = await createFermentable.execute({
// 			fermentable_color: 12,
// 			fermentable_name: "Pale Ale",
// 			fermentable_potential: 1.0374,
// 		});

// 		expect(fermentable).toHaveProperty("id");
// 	});
// });
