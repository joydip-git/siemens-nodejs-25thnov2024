import { inject, injectable } from "inversify";
import { Operations } from "./operations";
import { ServiceContract } from "./servicecontract";
import { SERVICE_TOKENS } from "./tokens";

@injectable()
export class Implementation implements Operations {
    constructor(@inject(SERVICE_TOKENS.DATA_SERVICE_TOKEN) private ds: ServiceContract) {

    }

    add(a: number, b: number): number {
        const res = a + b
        this.ds.writeResult(res)
        return res
    }
}