import { Router } from "express";
import { RouterConfigurationContract } from "./routerconfigurationcontract";
import { inject, injectable } from "inversify";
import { ProductControllerContract } from "../controllers/productcontrollercontract";
import { DI_TOKENS } from "../utils/constants";

@injectable()
export class ProductControllerRouterConfiguration implements RouterConfigurationContract {
    private router = Router()

    constructor(@inject(DI_TOKENS.CONTROLLER_TOKEN) private controller: ProductControllerContract) {
        console.log('pcr created...');
    }
    getRegisteredRoutes(): Router {
        this.router.get('/all', this.controller.fetchProducts)
        this.router.get('/:id', this.controller.fetchProductById)
        this.router.post('/add', this.controller.insertProduct)
        this.router.put('/update/:id', this.controller.updateProduct)
        this.router.delete('/delete/:id', this.controller.deleteProduct)
        return this.router
    }

}
