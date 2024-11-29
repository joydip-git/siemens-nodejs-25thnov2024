import { injectable } from "inversify";
import { ServiceContract } from "./servicecontract";

@injectable()
export class DataService implements ServiceContract {
    writeResult(result: number): void {
        console.log(result);
    }
}