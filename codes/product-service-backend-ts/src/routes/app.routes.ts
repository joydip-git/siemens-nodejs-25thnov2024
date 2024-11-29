import { Router } from "express";
import diTokens from "../utilities/app-constants";
import { ProductControllerContract } from "../controller/product-controller.contract";
import { injectable, inject } from "inversify";
import 'reflect-metadata'
import { UserControllerContract } from "../controller/user-controller.contract";
import { AuthMiddlewareContract } from "../middleware/auth-middleware.contract";
import { AppRoutesContract } from "./app-routes.contract";


const PRODUCTS_BASE_URL = process.env.PRODUCTS_BASE_URL || 'products'
const AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'auth'

@injectable()
export class AppRoutes implements AppRoutesContract {

    constructor(
        @inject(diTokens.PRODUCT_CONTROLLER_TOKEN)
        private productController: ProductControllerContract,

        @inject(diTokens.USER_CONTROLLER_TOKEN)
        private userController: UserControllerContract,

        @inject(diTokens.AUTH_MIDDLEWARE_TOKEN)
        private authMiddleware: AuthMiddlewareContract
    ) {

    }

    registerRoutes(): Router {
        const routerMiddleware = Router()

        routerMiddleware.post(
            `${AUTH_BASE_URL}/register`,
            this.userController.registerAction)
        routerMiddleware.post(
            `${AUTH_BASE_URL}/login`,
            this.userController.loginAction
        )

        routerMiddleware.get(
            PRODUCTS_BASE_URL,
            (req, res, next) => {
                this.authMiddleware.verifyToken(req, res, next)
            },
            this.productController.getAllAction

        )

        routerMiddleware.get(
            `${PRODUCTS_BASE_URL}/:id`,
            (req, res, next) => {
                this.authMiddleware.verifyToken(req, res, next)
            },
            this.productController.getAction
        )
        routerMiddleware.post(
            PRODUCTS_BASE_URL,
            (req, res, next) => {
                this.authMiddleware.verifyToken(req, res, next)
            },
            this.productController.postAction
        )
        routerMiddleware.put(
            `${PRODUCTS_BASE_URL}/:id`,
            (req, res, next) => {
                this.authMiddleware.verifyToken(req, res, next)
            },
            this.productController.putAction
        )
        routerMiddleware.delete(
            `${PRODUCTS_BASE_URL}/:id`,
            (req, res, next) => {
                this.authMiddleware.verifyToken(req, res, next)
            },
            this.productController.deleteAction
        )

        // routerMiddleware.get(
        //     PRODUCTS_BASE_URL,
        //     this.productController.getAllAction
        // )
        // routerMiddleware.get(
        //     `${PRODUCTS_BASE_URL}/:id`,
        //     this.productController.getAction
        // )
        // routerMiddleware.post(
        //     PRODUCTS_BASE_URL,
        //     this.productController.postAction
        // )
        // routerMiddleware.put(
        //     `${PRODUCTS_BASE_URL}/:id`,
        //     this.productController.putAction
        // )
        // routerMiddleware.delete(
        //     `${PRODUCTS_BASE_URL}/:id`, this.productController.deleteAction
        // )
        return routerMiddleware
    }
}