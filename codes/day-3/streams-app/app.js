const fs = require('node:fs')

const readableStream = fs.createReadStream('./input.txt', { autoClose: true, encoding: 'utf-8', highWaterMark: 5 })

const writableStream = fs.createWriteStream('./output.txt', { autoClose: true, encoding: 'utf-8', flags: 'a', highWaterMark: 5 })

writableStream.on('open', () => console.log('opened'))

readableStream.on('data', (chunk) => {
    console.log(chunk)
    writableStream.write(chunk)

})


