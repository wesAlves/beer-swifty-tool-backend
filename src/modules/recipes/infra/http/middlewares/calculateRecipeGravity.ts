import Fermentable from "@modules/fermentables/infra/typeorm/entities/Fermentable";
import { Request, Response, NextFunction } from "express";

interface ICalc {
    fermentables: IFermentablesProps[];
    final_volume: number;
    global_efficiency: number;
}

interface IFermentablesProps {
    color: number;
    potential: number;
    quantity: number;
}

export function CalculateRecipeFermentablesAttributes(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const {
        fermentables,
        final_volume,
        global_efficiency,
    }: ICalc = request.body;

    const fermentablesQuantity: number[] = [];
    const fermentablesYield: number[] = [];

    const fermentablesOG: number[] = [];

    const fermentablesColor: number[] = [];

    fermentables.map((fermentable) => {
        const potential = (fermentable.potential - 1) * Math.pow(10, 3);
        const quantity = fermentable.quantity;
        const colorSRM = fermentable.color;

        const gallonVolume = final_volume / 3.785;
        const poundQuantity = quantity * 2.205;

        const fermentableColorUnity =
            (poundQuantity * ((colorSRM + 0.6) / 1.35)) / gallonVolume;

        fermentablesYield.push(potential);
        fermentablesQuantity.push(poundQuantity);

        fermentablesOG.push((potential * poundQuantity) / gallonVolume);

        fermentablesColor.push(fermentableColorUnity);
    });

    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;

    // const mashExtractPotentialPPG =
    //     (final_volume * 38) / fermentablesQuantity.reduce(reducer);

    // const maxWortEfficiency = mashExtractPotentialPPG / 38; If it not becomes useful delete

    const og =
        fermentablesOG.reduce(reducer) *
            (global_efficiency / 100) *
            Math.pow(10, -3) +
        1;

    const color = 1.4922 * Math.pow(fermentablesColor.reduce(reducer), 0.6859);

    const fg = fermentablesOG.reduce(reducer) * 0.2 * Math.pow(10, -3) + 1;

    const abv = (og - fg) * 131.25;

    const ibu = 0;

    request.recipe = { color, og, fg, abv, ibu };

    return next();
}
