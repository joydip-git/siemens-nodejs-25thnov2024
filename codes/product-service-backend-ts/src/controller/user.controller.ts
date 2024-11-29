import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { inject, injectable } from "inversify";
import { ParsedQs } from "qs";
import { UserControllerContract } from "./user-controller.contract";
import 'reflect-metadata'
import diTokens from "../utilities/app-constants";
import { UserBoContract } from "../bo/user-bo.contract";
import { User } from "../models/user";
import createResponse from "../utilities/response-generator";
import { AuthMiddlewareContract } from "../middleware/auth-middleware.contract";

@injectable()
export class UserController implements UserControllerContract {
    constructor(
        @inject(diTokens.USER_BO_TOKEN)
        private _userBo: UserBoContract,
        @inject(diTokens.AUTH_MIDDLEWARE_TOKEN) private authMiddleware: AuthMiddlewareContract
    ) { }

    registerAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const user = <User>req.body
            const added = await this._userBo.saveUser(user)
            const response = createResponse<User>('registered successfully', 201, added)
            res.send(response)
        } catch (error: any) {
            const errResponse = createResponse<null>(error.message, 500)
            res.send(errResponse)
        }
    }

    loginAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const user = <User>req.body
            const found = await this._userBo.validateUser(user)
            if (found) {
                const token = this.authMiddleware.createToken(found)
                const response = createResponse<string>('authenticated successfully', 201, token)
                res.send(response)
            }
        } catch (error: any) {
            const errResponse = createResponse<null>(error.message, 500)
            res.send(errResponse)
        }
    }
}