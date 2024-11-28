//import { getData } from "./dbutility";
//import { createInterface } from "node:readline/promises";
// (
//     async () => {
//         try {
//             console.log(await getData());
//         } catch (error) {
//             console.log(error);
//         }
//     }
// )()
// const acceptUserInput = async () => {
//     const readWriteInterface = createInterface(process.stdin, process.stdout)
//     const empName = await readWriteInterface
//         .question('enter name: ')
//     const empSalary = Number(await readWriteInterface
//         .question('enter salary: '))
//     console.log(empName, empSalary);
//     readWriteInterface.close()
// }
// acceptUserInput()

// const args = process.argv.slice(2)
// console.log(args[0].split('=')[1]);
/*
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargsObj = yargs(hideBin(process.argv))
const args = yargsObj
    .option('name', {
        alias: 'n',
        description: 'name of an employee',
        demandOption: true,
        type: 'string'
    })
    .option('id', {
        alias: 'i',
        description: 'id of an employee',
        demandOption: true,
        type: 'number'
    })
    .option('salary', {
        alias: 's',
        description: 'salary of an employee',
        demandOption: true,
        type: 'number'
    }).parseSync()

console.log(args.id, args.name, args.salary);
*/

/*
import { Command } from 'commander';
const program = new Command();

program
    .name('string-util')
    .description('CLI to some JavaScript string utilities')
    .version('0.8.0');

program
    .command('split')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit));
    });

program.parse();
*/

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command('serve [port]', 'start the server',
        (yargs) => {
            return yargs
                .positional(
                    'port', {
                    describe: 'port to bind on',
                    default: 5000
                })
        }, (argv) => {
            if (argv.verbose) {
                console.info(`start server on :${argv.port}`)
                console.log(argv.port)
            }
        })
    .option(
        'verbose', {
        alias: 'v',
        type: 'boolean',
        description: 'Run with verbose logging'
    })
    .parse()








