const https = require('node:https')

const start = Date.now()
for (let index = 0; index < 10; index++) {
    const req = https.request('https://www.google.co.in',
        (res) => {
            res.on('data', (chunk) => {
                console.log(`Chunk received: ${Date.now() - start}`)
            })
            res.on('end', () => {
                console.log(`Response received: ${Date.now() - start}`)
            })
        }
    )
    req.end()
}