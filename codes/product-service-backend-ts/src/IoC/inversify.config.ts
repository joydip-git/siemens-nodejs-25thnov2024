import { Container } from "inversify";
import 'reflect-metadata'
import { DaoContract } from "../dao/dao.contract";
import { Product } from "../models/product";
import diTokens from "../utilities/app-constants";
import { ProductDao } from "../dao/product.dao";
import { User } from "../models/user";
import { UserDao } from "../dao/user.dao";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { ProductBoContract } from "../bo/product-bo.contract";
import { ProductBo } from "../bo/product.bo";
import { UserBoContract } from "../bo/user-bo.contract";
import { UserBo } from "../bo/user.bo";
import { UserControllerContract } from "../controller/user-controller.contract";
import { UserController } from "../controller/user.controller";
import { ProductControllerContract } from "../controller/product-controller.contract";
import { ProductController } from "../controller/product.controller";
import { AuthMiddlewareContract } from "../middleware/auth-middleware.contract";
import { AppRoutesContract } from "../routes/app-routes.contract";
import { AppRoutes } from "../routes/app.routes";

const container = new Container()

container.bind<DaoContract<Product[]>>(diTokens.PRODUCT_DAO_TOKEN).to(ProductDao)
container.bind<DaoContract<User[]>>(diTokens.USER_DAO_TOKEN).to(UserDao)

container.bind<ProductBoContract>(diTokens.PRODUCT_BO_TOKEN).to(ProductBo)
container.bind<UserBoContract>(diTokens.USER_BO_TOKEN).to(UserBo)

container.bind<ProductControllerContract>(diTokens.PRODUCT_CONTROLLER_TOKEN).to(ProductController)
container.bind<UserControllerContract>(diTokens.USER_CONTROLLER_TOKEN).to(UserController)

container.bind<AuthMiddlewareContract>(diTokens.AUTH_MIDDLEWARE_TOKEN).to(AuthMiddleware)

container.bind<AppRoutesContract>(diTokens.APP_ROUTES_TOKEN).to(AppRoutes);

export default container