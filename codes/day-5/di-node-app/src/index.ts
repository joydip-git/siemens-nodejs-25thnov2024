import appcontainer from "./appcontainer";
import { Operations } from "./operations";
import { SERVICE_TOKENS } from "./tokens";

const impl: Operations = appcontainer.get<Operations>(SERVICE_TOKENS.OPERATIONS_SERVICE_TOKEN)
console.log(impl.add(12, 3))