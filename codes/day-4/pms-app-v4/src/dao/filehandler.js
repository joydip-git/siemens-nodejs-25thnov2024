import { readFile, writeFile } from "node:fs/promises";

export const writeData = async (data) => {
    try {
        await writeFile('./data/products.json', JSON.stringify(data))
        return true
    } catch (error) {
        throw error
    }
}
export const readData = async () => {
    try {
        var data = await readFile('./data/products.json', { encoding: 'utf-8' })
        return JSON.parse(data)
    } catch (error) {
        throw error
    }
}