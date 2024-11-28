import { readFile } from 'node:fs/promises'

export const getData = async () => {
    try {
        return await readFile('./data/data.txt', { encoding: 'utf-8' })
    } catch (error) {
        throw error
    }
}