import { readFile, writeFile } from 'fs';
import dotenv from 'dotenv';
import { User } from '../models/user'
import { DaoContract } from './dao.contract';
import { injectable } from 'inversify';

dotenv.config()
const filePath = process.env.USERS_FILE_PATH || '../data/users.json'

@injectable()
export class UserDao implements DaoContract<User[]> {
    readFromFile(): Promise<User[]> {
        return new Promise(
            (resolve, reject) => {
                readFile(filePath,
                    (err, data) => {
                        if (data) {
                            const records = JSON.parse(data.toString())
                            resolve(<User[]>records)
                        }
                        if (err)
                            reject(err)

                    });
            }
        );
    }
    writeIntoFile(data: User[]): Promise<void> {
        return new Promise(
            (resolve, reject) => {
                writeFile(
                    filePath,
                    JSON.stringify(data),
                    (err) => {
                        if (err)
                            reject(err)
                        else
                            resolve()

                    }
                )
            })
    }

}