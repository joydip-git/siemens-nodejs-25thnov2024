import { Router } from "express"
import { ApiController } from "./apicontroller"
import { ApiControllerContract } from "./apicontrollercontract"
import { AppRoutesContract } from "./approutescontract"
import { inject, injectable } from "inversify"
import { APP_TOKENS } from "./tokens"

@injectable()
class ApiControllerRoutes implements AppRoutesContract {
    private apiRouter = Router()
    constructor(@inject(APP_TOKENS.APICONTROLLER_TOKEN) private controller: ApiControllerContract) {
        console.log('api controller Routes created...');
    }
    getRegisteredRoutes(): Router {
        this.apiRouter.get('/', this.controller.getAction)
        this.apiRouter.get('/:name/:salary?', this.controller.getAllAction)
        return this.apiRouter
    }
}
// const apiRouter = Router()
// const controller = new ApiController()
// apiRouter.get('/', controller.getAction)
// apiRouter.get('/:name/:salary?', controller.getAllAction)

export default ApiControllerRoutes