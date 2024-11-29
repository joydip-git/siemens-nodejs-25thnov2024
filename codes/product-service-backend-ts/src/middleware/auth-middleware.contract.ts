import { NextFunction, Response, Request } from "express";
import { User } from "../models/user";

export interface AuthMiddlewareContract {
    createToken(user: User): string;
    verifyToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}