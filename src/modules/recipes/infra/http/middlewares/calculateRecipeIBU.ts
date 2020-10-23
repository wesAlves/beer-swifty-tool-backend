import { Request, Response, NextFunction } from "express";

interface ICalc {
    final_volume: number;
    global_efficiency: number;
    hops: IHopsProps[];
}

interface IHopsProps {
    quantity: number;
    add_type: string;
    add_time: number;
    alpha_acid: number;
}

export function CalculateRecipeIBU(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const { hops, final_volume }: ICalc = request.body;
    const { color, og, fg, abv } = request.recipe;

    const alphaAcidArray: number[] = [];

    hops.map((hop) => {
        const utilization =
            (1.65 *
                Math.pow(0.000125, og - 1) *
                (1 - Math.exp(-0.04 * hop.add_time))) /
            4.15;

        const alphaAcidUnity = hop.alpha_acid * hop.quantity;
        const ibuFormula = ((alphaAcidUnity * utilization) / final_volume) * 10;

        alphaAcidArray.push(ibuFormula);
    });

    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;

    const ibu = alphaAcidArray.reduce(reducer);

    request.recipe = { color, og, fg, abv, ibu };

    return next();
}
