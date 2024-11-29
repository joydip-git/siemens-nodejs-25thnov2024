import { Request, Response } from "express";
import { ApiControllerContract } from "./apicontrollercontract";
import { injectable } from "inversify";

@injectable()
export class ApiController implements ApiControllerContract {
    constructor() {
        console.log('Api controller created...');
    }
    async getAction(req: Request, res: Response) {
        res.write('hello')
        res.send()
    }
    async getAllAction(req: Request, res: Response) {
        res.write('hello ' + req.params.name + '. salary is ' + req.params.salary)
        res.send()
    }
}