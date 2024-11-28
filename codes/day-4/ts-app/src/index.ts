//import { getData } from "./dbutility";
import { createInterface } from "node:readline/promises";
// (
//     async () => {
//         try {
//             console.log(await getData());
//         } catch (error) {
//             console.log(error);
//         }
//     }
// )()
(
    async () => {
        const readWriteInterface = createInterface(process.stdin, process.stdout)
        const empName = await readWriteInterface
            .question('enter name: ')
        const empSalary = Number(await readWriteInterface
            .question('enter salary: '))
        console.log(empName, empSalary);

        readWriteInterface.close()
    }
)()









