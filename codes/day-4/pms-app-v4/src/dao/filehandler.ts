import { readFile, writeFile } from "node:fs/promises";
import Product from "../models/product";
import { APP_CONSTANTS } from "../utils/constants";

export const writeData = async (data: Product[]): Promise<boolean> => {
    try {
        await writeFile(APP_CONSTANTS.filePath, JSON.stringify(data))
        return true
    } catch (error) {
        throw error
    }
}
export const readData = async (): Promise<Product[]> => {
    try {
        var data = await readFile(APP_CONSTANTS.filePath, { encoding: 'utf-8' })
        return JSON.parse(data) as Product[]
    } catch (error) {
        throw error
    }
}