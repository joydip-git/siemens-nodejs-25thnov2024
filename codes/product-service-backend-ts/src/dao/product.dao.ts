import { readFile, writeFile } from 'fs'
import dotenv from 'dotenv'
import { Product } from "../models/product";
import { DaoContract } from './dao.contract';
import { injectable } from 'inversify';

dotenv.config()
const filePath = process.env.PRODUCTS_FILE_PATH || '../data/products.json'

@injectable()
export class ProductDao implements DaoContract<Product[]> {
    readFromFile(): Promise<Product[]> {
        return new Promise(
            (resolve, reject) => {
                readFile(filePath, (err, data) => {
                    if (data) {
                        const records = JSON.parse(data.toString())
                        resolve(<Product[]>records)
                    }

                    if (err)
                        reject(err.message)
                });
            }
        );
    }
    writeIntoFile(data: Product[]): Promise<void> {
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

                    });
            }
        )
    }
}