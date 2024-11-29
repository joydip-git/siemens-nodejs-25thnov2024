import { Request, Response } from "express";

export interface ApiControllerContract {
    getAction(req: Request, res: Response): Promise<void>;
    getAllAction(req: Request, res: Response): Promise<void>;
}