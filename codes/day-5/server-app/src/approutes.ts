import { Router } from "express";
import apiRouter from "./apicontrollerroutes";
import { AppRoutesContract } from "./approutescontract";
import { inject, injectable } from "inversify";
import { APP_TOKENS } from "./tokens";

@injectable()
class AppRoutes implements AppRoutesContract {
    private router: Router;
    constructor(@inject(APP_TOKENS.APICONTROLLER_ROUTES_TOKEN) private apiRoutes: AppRoutesContract) {
        this.router = Router()
        console.log('App Routes created...');
    }
    getRegisteredRoutes() {
        this.router.use('/api', this.apiRoutes.getRegisteredRoutes())
        return this.router
    }
}
export default AppRoutes