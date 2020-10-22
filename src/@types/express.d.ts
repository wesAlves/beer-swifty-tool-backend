declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };

        recipe: {
            color: number;
            og: number;
            fg: number;
            abv: number;
            ibu: number;
        };
    }
}
