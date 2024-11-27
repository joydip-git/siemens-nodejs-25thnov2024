import { readFile, readFileSync, writeFileSync } from "node:fs";

export const writeData = (data) => {
    try {
        writeFileSync('./data/products.json', JSON.stringify(data))
        return true
    } catch (error) {
        throw error
    }
}
export const readData = () => {
    try {
        var data = readFileSync('./data/products.json')
        return JSON.parse(data)
    } catch (error) {
        throw error
    }
}