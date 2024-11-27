const { createReadStream } = require('fs')
const { readFile } = require('fs').promises
const https = require('node:https')

// const req = https.request('https://www.google.co.in',
//     (res) => {
//         res.on('data', (chunk) => {
//             console.log(`Chunk received`)
//         })
//         // res.on('end', () => {
//         //     console.log(`Response received done...`)
//         // })
//     }
// )
// req.end()
for (let index = 0; index < 100000000; index++) {
}

setTimeout(() => console.log('settimeout 1'))
process.nextTick(() => console.log('next tick 1'))
Promise.resolve().then(() => console.log('proimse 1'))

process.nextTick(
    () => {
        readFile('./data.txt', { encoding: 'utf-8' })
            .then((err, data) => console.log('IO callback 1'))
    }
)
setImmediate(() => console.log('setimmediate 1'))


// readFile(__filename, { encoding: 'utf-8' },
//     (err, data) => console.log('IO callback 1')
// )

const stream = createReadStream(__filename)
stream.on('close', () => console.log('read over....'))
stream.close()

// fetch('').then((res) => console.log(object))