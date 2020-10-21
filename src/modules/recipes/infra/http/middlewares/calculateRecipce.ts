import Fermentable from "@modules/fermentables/infra/typeorm/entities/Fermentable";
import { Request, Response, NextFunction } from "express";

interface IFermentables {
    fermentables: IFermentablesProps[];
    final_volume: number;
}

interface IFermentablesProps {
    color: number;
    potential: number;
    quantity: number;
}

export function CalculateRecipeAttributes(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const { fermentables, final_volume }: IFermentables = request.body;

    const fermentablesQuantity: number[] = [];
    const fermentablesYield: number[] = [];

    const fermentablesOG: number[] = [];

    fermentables.map((fermentable) => {
        const potential = (fermentable.potential - 1) * Math.pow(10, 3);
        const quantity = fermentable.quantity;

        fermentablesYield.push(potential);
        fermentablesQuantity.push(quantity);

        fermentablesOG.push((potential * quantity) / final_volume);
    });

    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;

    // const mashExtractPotentialPPG =
    //     (6 * 38) / fermentablesQuantity.reduce(reducer);

    const global_efficiency = (38 * 100) / fermentablesOG.reduce(reducer);

    const og = fermentablesOG.reduce(reducer) * Math.pow(10, -3) + 1;

    const color = 10;

    const fg = 2;

    const abv = 3;

    const ibu = 5;

    // console.log(global_efficiency);
    // console.log(mashEfficiency);

    request.recipe = { color, og, fg, abv, ibu, global_efficiency };

    return next();
}
