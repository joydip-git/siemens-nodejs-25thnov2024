import 'reflect-metadata'
import { Container } from "inversify";
import { RepositoryContract } from '../repository/repositorycontract';
import Product from '../models/product';
import { DI_TOKENS } from './constants';
import ProductRepository from '../repository/productrepository';
import { ProductControllerContract } from '../controllers/productcontrollercontract';
import ProductController from '../controllers/productcontroller';
import { ProductControllerRouterConfiguration } from '../routes/productcontrollerrouteconfiguration';
import { RouterConfigurationContract } from '../routes/routerconfigurationcontract';
import { AppRouteConfiguration } from '../routes/aprouteconfiguration';

const appcontainer = new Container({ autoBindInjectable: true })

appcontainer.bind<RepositoryContract<Product, number>>(DI_TOKENS.REPOSITORY_TOKEN).to(ProductRepository);

appcontainer.bind<ProductControllerContract>(DI_TOKENS.CONTROLLER_TOKEN).to(ProductController)

appcontainer.bind<RouterConfigurationContract>(DI_TOKENS.PRODUCT_CONTROLLER_ROUTES_TOKEN).to(ProductControllerRouterConfiguration)

appcontainer.bind<RouterConfigurationContract>(DI_TOKENS.APP_ROUTES_TOKEN).to(AppRouteConfiguration)

export default appcontainer