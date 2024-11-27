// const { readFile } = require('node:fs/promises')
const { readFile } = require('node:fs').promises

async function getData() {
    try {
        const data = await readFile(__filename, {})
        return JSON.parse(data)
    } catch (error) {
        throw error
    }
}

async function fetchData() {
    try {
        const data = await getData()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

