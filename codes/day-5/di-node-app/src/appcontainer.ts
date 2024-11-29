import { Container } from "inversify";
import { SERVICE_TOKENS } from "./tokens";
import { DataService } from "./dataservice";
import { ServiceContract } from "./servicecontract";
import { Operations } from "./operations";
import { Implementation } from "./implementation";

const appcontainer = new Container()

appcontainer.bind<ServiceContract>(SERVICE_TOKENS.DATA_SERVICE_TOKEN).to(DataService)
appcontainer.bind<Operations>(SERVICE_TOKENS.OPERATIONS_SERVICE_TOKEN).to(Implementation)

export default appcontainer