import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import cors from "cors";

import routes from "./routes";
import "../typeorm";
import "@shared/container";
import AppError from "@shared/errors/AppErrors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                stauts: "error",
                messager: err.message,
            });
        }

        console.error(err);

        return response.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
);

app.listen(3333, () => {
    console.log("server is running on port 3333");
});
