import 'reflect-metadata'
import { Container } from "inversify";
import { APP_TOKENS } from './tokens';
import { ApiController } from './apicontroller';
import { ApiControllerContract } from './apicontrollercontract';
import ApiControllerRoutes from './apicontrollerroutes';
import { AppRoutesContract } from './approutescontract';
import AppRoutes from './approutes';

const appcontainer = new Container()

appcontainer.bind<ApiControllerContract>(APP_TOKENS.APICONTROLLER_TOKEN).to(ApiController)
appcontainer.bind<AppRoutesContract>(APP_TOKENS.APICONTROLLER_ROUTES_TOKEN).to(ApiControllerRoutes)
appcontainer.bind<AppRoutesContract>(APP_TOKENS.APP_ROUTES_TOKEN).to(AppRoutes)

export default appcontainer