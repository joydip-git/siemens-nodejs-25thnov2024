import { Request, Response } from "express";

export interface UserControllerContract {
    registerAction(req: Request, res: Response): Promise<void>;
    loginAction(req: Request, res: Response): Promise<void>;
}