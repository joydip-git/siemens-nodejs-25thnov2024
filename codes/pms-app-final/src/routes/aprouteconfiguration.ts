import { Router } from "express";
import { RouterConfigurationContract } from "./routerconfigurationcontract";
import { inject, injectable } from "inversify";
import { DI_TOKENS } from "../utils/constants";

@injectable()
export class AppRouteConfiguration implements RouterConfigurationContract {

    private router = Router()
    constructor(@inject(DI_TOKENS.PRODUCT_CONTROLLER_ROUTES_TOKEN) private productRoutes: RouterConfigurationContract) {
        console.log('approutes created...');
    }
    getRegisteredRoutes(): Router {
        return this.router.use('/products', this.productRoutes.getRegisteredRoutes())
    }

}