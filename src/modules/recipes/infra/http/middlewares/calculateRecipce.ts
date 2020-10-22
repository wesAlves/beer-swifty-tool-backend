import Fermentable from "@modules/fermentables/infra/typeorm/entities/Fermentable";
import { Request, Response, NextFunction } from "express";

interface IFermentables {
    fermentables: IFermentablesProps[];
    final_volume: number;
    global_efficiency: number;
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
    const {
        fermentables,
        final_volume,
        global_efficiency,
    }: IFermentables = request.body;

    const fermentablesQuantity: number[] = [];
    const fermentablesYield: number[] = [];

    const fermentablesOG: number[] = [];

    const fermentablesColor: number[] = [];

    fermentables.map((fermentable) => {
        const potential = (fermentable.potential - 1) * Math.pow(10, 3);
        const quantity = fermentable.quantity;
        const colorSRM = fermentable.color;

        const fermentableColorUnity =
            (quantity * ((colorSRM + 0.6) / 1.35)) / final_volume;

        fermentablesYield.push(potential);
        fermentablesQuantity.push(quantity);

        fermentablesOG.push((potential * quantity) / final_volume);

        fermentablesColor.push(fermentableColorUnity);
    });

    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;

    // const mashExtractPotentialPPG =
    //     (final_volume * 38) / fermentablesQuantity.reduce(reducer);

    // const maxWortEfficiency = mashExtractPotentialPPG / 38;

    const og =
        fermentablesOG.reduce(reducer) *
            (global_efficiency / 100) *
            Math.pow(10, -3) +
        1;

    const color = 1.4922 * Math.pow(fermentablesColor.reduce(reducer), 0.6859);

    const fg = fermentablesOG.reduce(reducer) * 0.25 * Math.pow(10, -3) + 1;

    const abv = 3;

    const ibu = 5;

    // console.log(mashExtractPotentialPPG);
    // console.log(maxWortEfficiency);

    request.recipe = { color, og, fg, abv, ibu };

    return next();
}
