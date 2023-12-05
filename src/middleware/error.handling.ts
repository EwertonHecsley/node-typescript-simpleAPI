import { NextFunction, Request, Response } from "express";
import { ApiError } from "./ClassesErrors/ApiError";

export const errorHandling = (error: Error & ApiError, _req: Request, res: Response, _next: NextFunction) => {
    const statusCode = error.statusCode ?? 500;
    return res.status(statusCode).json({ mensagem: error.message });
};